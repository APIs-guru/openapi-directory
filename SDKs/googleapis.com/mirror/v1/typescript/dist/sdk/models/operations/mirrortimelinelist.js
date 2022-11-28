var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var MirrorTimelineListOrderByEnum;
(function (MirrorTimelineListOrderByEnum) {
    MirrorTimelineListOrderByEnum["DisplayTime"] = "displayTime";
    MirrorTimelineListOrderByEnum["WriteTime"] = "writeTime";
})(MirrorTimelineListOrderByEnum || (MirrorTimelineListOrderByEnum = {}));
var MirrorTimelineListQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelineListQueryParams, _super);
    function MirrorTimelineListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundleId" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineListQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], MirrorTimelineListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pinnedOnly" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineListQueryParams.prototype, "pinnedOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelineListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceItemId" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "sourceItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelineListQueryParams.prototype, "userIp", void 0);
    return MirrorTimelineListQueryParams;
}(SpeakeasyBase));
export { MirrorTimelineListQueryParams };
var MirrorTimelineListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorTimelineListSecurityOption1, _super);
    function MirrorTimelineListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineListSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorTimelineListSecurityOption1;
}(SpeakeasyBase));
export { MirrorTimelineListSecurityOption1 };
var MirrorTimelineListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorTimelineListSecurityOption2, _super);
    function MirrorTimelineListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelineListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelineListSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorTimelineListSecurityOption2;
}(SpeakeasyBase));
export { MirrorTimelineListSecurityOption2 };
var MirrorTimelineListSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelineListSecurity, _super);
    function MirrorTimelineListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineListSecurityOption1)
    ], MirrorTimelineListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelineListSecurityOption2)
    ], MirrorTimelineListSecurity.prototype, "option2", void 0);
    return MirrorTimelineListSecurity;
}(SpeakeasyBase));
export { MirrorTimelineListSecurity };
var MirrorTimelineListRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelineListRequest, _super);
    function MirrorTimelineListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineListQueryParams)
    ], MirrorTimelineListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelineListSecurity)
    ], MirrorTimelineListRequest.prototype, "security", void 0);
    return MirrorTimelineListRequest;
}(SpeakeasyBase));
export { MirrorTimelineListRequest };
var MirrorTimelineListResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelineListResponse, _super);
    function MirrorTimelineListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelineListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelineListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelineListResponse.prototype, "statusCode", void 0);
    return MirrorTimelineListResponse;
}(SpeakeasyBase));
export { MirrorTimelineListResponse };
