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
var CloudsearchSettingsSearchapplicationsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchPathParams, _super);
    function CloudsearchSettingsSearchapplicationsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchPathParams.prototype, "name", void 0);
    return CloudsearchSettingsSearchapplicationsPatchPathParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchPathParams };
var CloudsearchSettingsSearchapplicationsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchQueryParams, _super);
    function CloudsearchSettingsSearchapplicationsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsSearchapplicationsPatchQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchQueryParams };
var CloudsearchSettingsSearchapplicationsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchSecurityOption1, _super);
    function CloudsearchSettingsSearchapplicationsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsPatchSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchSecurityOption1 };
var CloudsearchSettingsSearchapplicationsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchSecurityOption2, _super);
    function CloudsearchSettingsSearchapplicationsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsPatchSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchSecurityOption2 };
var CloudsearchSettingsSearchapplicationsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchSecurityOption3, _super);
    function CloudsearchSettingsSearchapplicationsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsPatchSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchSecurityOption3 };
var CloudsearchSettingsSearchapplicationsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchSecurity, _super);
    function CloudsearchSettingsSearchapplicationsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsPatchSecurityOption1)
    ], CloudsearchSettingsSearchapplicationsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsPatchSecurityOption2)
    ], CloudsearchSettingsSearchapplicationsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsPatchSecurityOption3)
    ], CloudsearchSettingsSearchapplicationsPatchSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsSearchapplicationsPatchSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchSecurity };
var CloudsearchSettingsSearchapplicationsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchRequest, _super);
    function CloudsearchSettingsSearchapplicationsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsPatchPathParams)
    ], CloudsearchSettingsSearchapplicationsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsPatchQueryParams)
    ], CloudsearchSettingsSearchapplicationsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchApplicationInput)
    ], CloudsearchSettingsSearchapplicationsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsPatchSecurity)
    ], CloudsearchSettingsSearchapplicationsPatchRequest.prototype, "security", void 0);
    return CloudsearchSettingsSearchapplicationsPatchRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchRequest };
var CloudsearchSettingsSearchapplicationsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsPatchResponse, _super);
    function CloudsearchSettingsSearchapplicationsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchSettingsSearchapplicationsPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsPatchResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsSearchapplicationsPatchResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsPatchResponse };
