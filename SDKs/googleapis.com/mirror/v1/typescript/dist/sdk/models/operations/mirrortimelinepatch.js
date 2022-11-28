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
var MirrorTimelinePatchPathParams = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchPathParams, _super);
    function MirrorTimelinePatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchPathParams.prototype, "id", void 0);
    return MirrorTimelinePatchPathParams;
}(SpeakeasyBase));
export { MirrorTimelinePatchPathParams };
var MirrorTimelinePatchQueryParams = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchQueryParams, _super);
    function MirrorTimelinePatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorTimelinePatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorTimelinePatchQueryParams.prototype, "userIp", void 0);
    return MirrorTimelinePatchQueryParams;
}(SpeakeasyBase));
export { MirrorTimelinePatchQueryParams };
var MirrorTimelinePatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchSecurityOption1, _super);
    function MirrorTimelinePatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelinePatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelinePatchSecurityOption1.prototype, "oauth2c", void 0);
    return MirrorTimelinePatchSecurityOption1;
}(SpeakeasyBase));
export { MirrorTimelinePatchSecurityOption1 };
var MirrorTimelinePatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchSecurityOption2, _super);
    function MirrorTimelinePatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorTimelinePatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorTimelinePatchSecurityOption2.prototype, "oauth2c", void 0);
    return MirrorTimelinePatchSecurityOption2;
}(SpeakeasyBase));
export { MirrorTimelinePatchSecurityOption2 };
var MirrorTimelinePatchSecurity = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchSecurity, _super);
    function MirrorTimelinePatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelinePatchSecurityOption1)
    ], MirrorTimelinePatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MirrorTimelinePatchSecurityOption2)
    ], MirrorTimelinePatchSecurity.prototype, "option2", void 0);
    return MirrorTimelinePatchSecurity;
}(SpeakeasyBase));
export { MirrorTimelinePatchSecurity };
var MirrorTimelinePatchRequest = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchRequest, _super);
    function MirrorTimelinePatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelinePatchPathParams)
    ], MirrorTimelinePatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelinePatchQueryParams)
    ], MirrorTimelinePatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TimelineItem)
    ], MirrorTimelinePatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorTimelinePatchSecurity)
    ], MirrorTimelinePatchRequest.prototype, "security", void 0);
    return MirrorTimelinePatchRequest;
}(SpeakeasyBase));
export { MirrorTimelinePatchRequest };
var MirrorTimelinePatchResponse = /** @class */ (function (_super) {
    __extends(MirrorTimelinePatchResponse, _super);
    function MirrorTimelinePatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MirrorTimelinePatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorTimelinePatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorTimelinePatchResponse.prototype, "statusCode", void 0);
    return MirrorTimelinePatchResponse;
}(SpeakeasyBase));
export { MirrorTimelinePatchResponse };
