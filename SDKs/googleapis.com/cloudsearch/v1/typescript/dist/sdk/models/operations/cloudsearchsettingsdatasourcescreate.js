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
var CloudsearchSettingsDatasourcesCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateQueryParams, _super);
    function CloudsearchSettingsDatasourcesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsDatasourcesCreateQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateQueryParams };
var CloudsearchSettingsDatasourcesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateSecurityOption1, _super);
    function CloudsearchSettingsDatasourcesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsDatasourcesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsDatasourcesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsDatasourcesCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateSecurityOption1 };
var CloudsearchSettingsDatasourcesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateSecurityOption2, _super);
    function CloudsearchSettingsDatasourcesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsDatasourcesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsDatasourcesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsDatasourcesCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateSecurityOption2 };
var CloudsearchSettingsDatasourcesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateSecurityOption3, _super);
    function CloudsearchSettingsDatasourcesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsDatasourcesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsDatasourcesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsDatasourcesCreateSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateSecurityOption3 };
var CloudsearchSettingsDatasourcesCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateSecurity, _super);
    function CloudsearchSettingsDatasourcesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsDatasourcesCreateSecurityOption1)
    ], CloudsearchSettingsDatasourcesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsDatasourcesCreateSecurityOption2)
    ], CloudsearchSettingsDatasourcesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsDatasourcesCreateSecurityOption3)
    ], CloudsearchSettingsDatasourcesCreateSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsDatasourcesCreateSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateSecurity };
var CloudsearchSettingsDatasourcesCreateRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateRequest, _super);
    function CloudsearchSettingsDatasourcesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsDatasourcesCreateQueryParams)
    ], CloudsearchSettingsDatasourcesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DataSource)
    ], CloudsearchSettingsDatasourcesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsDatasourcesCreateSecurity)
    ], CloudsearchSettingsDatasourcesCreateRequest.prototype, "security", void 0);
    return CloudsearchSettingsDatasourcesCreateRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateRequest };
var CloudsearchSettingsDatasourcesCreateResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesCreateResponse, _super);
    function CloudsearchSettingsDatasourcesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchSettingsDatasourcesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsDatasourcesCreateResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsDatasourcesCreateResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesCreateResponse };
