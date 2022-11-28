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
var PubsubProjectsSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListPathParams, _super);
    function PubsubProjectsSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListPathParams.prototype, "project", void 0);
    return PubsubProjectsSnapshotsListPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListPathParams };
var PubsubProjectsSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListQueryParams, _super);
    function PubsubProjectsSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSnapshotsListQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListQueryParams };
var PubsubProjectsSnapshotsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListSecurityOption1, _super);
    function PubsubProjectsSnapshotsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSnapshotsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSnapshotsListSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSnapshotsListSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListSecurityOption1 };
var PubsubProjectsSnapshotsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListSecurityOption2, _super);
    function PubsubProjectsSnapshotsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSnapshotsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSnapshotsListSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSnapshotsListSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListSecurityOption2 };
var PubsubProjectsSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListSecurity, _super);
    function PubsubProjectsSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSnapshotsListSecurityOption1)
    ], PubsubProjectsSnapshotsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSnapshotsListSecurityOption2)
    ], PubsubProjectsSnapshotsListSecurity.prototype, "option2", void 0);
    return PubsubProjectsSnapshotsListSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListSecurity };
var PubsubProjectsSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListRequest, _super);
    function PubsubProjectsSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsListPathParams)
    ], PubsubProjectsSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsListQueryParams)
    ], PubsubProjectsSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSnapshotsListSecurity)
    ], PubsubProjectsSnapshotsListRequest.prototype, "security", void 0);
    return PubsubProjectsSnapshotsListRequest;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListRequest };
var PubsubProjectsSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSnapshotsListResponse, _super);
    function PubsubProjectsSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSnapshotsResponse)
    ], PubsubProjectsSnapshotsListResponse.prototype, "listSnapshotsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSnapshotsListResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSnapshotsListResponse;
}(SpeakeasyBase));
export { PubsubProjectsSnapshotsListResponse };
