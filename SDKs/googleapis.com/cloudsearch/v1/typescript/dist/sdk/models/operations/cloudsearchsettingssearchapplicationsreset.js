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
var CloudsearchSettingsSearchapplicationsResetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetPathParams, _super);
    function CloudsearchSettingsSearchapplicationsResetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetPathParams.prototype, "name", void 0);
    return CloudsearchSettingsSearchapplicationsResetPathParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetPathParams };
var CloudsearchSettingsSearchapplicationsResetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetQueryParams, _super);
    function CloudsearchSettingsSearchapplicationsResetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsSearchapplicationsResetQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetQueryParams };
var CloudsearchSettingsSearchapplicationsResetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetSecurityOption1, _super);
    function CloudsearchSettingsSearchapplicationsResetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsResetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsResetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsResetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetSecurityOption1 };
var CloudsearchSettingsSearchapplicationsResetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetSecurityOption2, _super);
    function CloudsearchSettingsSearchapplicationsResetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsResetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsResetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsResetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetSecurityOption2 };
var CloudsearchSettingsSearchapplicationsResetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetSecurityOption3, _super);
    function CloudsearchSettingsSearchapplicationsResetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsResetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsResetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsResetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetSecurityOption3 };
var CloudsearchSettingsSearchapplicationsResetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetSecurity, _super);
    function CloudsearchSettingsSearchapplicationsResetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsResetSecurityOption1)
    ], CloudsearchSettingsSearchapplicationsResetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsResetSecurityOption2)
    ], CloudsearchSettingsSearchapplicationsResetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsResetSecurityOption3)
    ], CloudsearchSettingsSearchapplicationsResetSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsSearchapplicationsResetSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetSecurity };
var CloudsearchSettingsSearchapplicationsResetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetRequest, _super);
    function CloudsearchSettingsSearchapplicationsResetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsResetPathParams)
    ], CloudsearchSettingsSearchapplicationsResetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsResetQueryParams)
    ], CloudsearchSettingsSearchapplicationsResetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResetSearchApplicationRequest)
    ], CloudsearchSettingsSearchapplicationsResetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsResetSecurity)
    ], CloudsearchSettingsSearchapplicationsResetRequest.prototype, "security", void 0);
    return CloudsearchSettingsSearchapplicationsResetRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetRequest };
var CloudsearchSettingsSearchapplicationsResetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsResetResponse, _super);
    function CloudsearchSettingsSearchapplicationsResetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsResetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchSettingsSearchapplicationsResetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsResetResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsSearchapplicationsResetResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsResetResponse };
