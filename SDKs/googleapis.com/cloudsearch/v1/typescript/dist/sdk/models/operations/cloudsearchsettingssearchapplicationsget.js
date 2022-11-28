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
var CloudsearchSettingsSearchapplicationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetPathParams, _super);
    function CloudsearchSettingsSearchapplicationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetPathParams.prototype, "name", void 0);
    return CloudsearchSettingsSearchapplicationsGetPathParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetPathParams };
var CloudsearchSettingsSearchapplicationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetQueryParams, _super);
    function CloudsearchSettingsSearchapplicationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsSearchapplicationsGetQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetQueryParams };
var CloudsearchSettingsSearchapplicationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetSecurityOption1, _super);
    function CloudsearchSettingsSearchapplicationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetSecurityOption1 };
var CloudsearchSettingsSearchapplicationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetSecurityOption2, _super);
    function CloudsearchSettingsSearchapplicationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetSecurityOption2 };
var CloudsearchSettingsSearchapplicationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetSecurityOption3, _super);
    function CloudsearchSettingsSearchapplicationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetSecurityOption3 };
var CloudsearchSettingsSearchapplicationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetSecurity, _super);
    function CloudsearchSettingsSearchapplicationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsGetSecurityOption1)
    ], CloudsearchSettingsSearchapplicationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsGetSecurityOption2)
    ], CloudsearchSettingsSearchapplicationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsGetSecurityOption3)
    ], CloudsearchSettingsSearchapplicationsGetSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsSearchapplicationsGetSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetSecurity };
var CloudsearchSettingsSearchapplicationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetRequest, _super);
    function CloudsearchSettingsSearchapplicationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsGetPathParams)
    ], CloudsearchSettingsSearchapplicationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsGetQueryParams)
    ], CloudsearchSettingsSearchapplicationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsGetSecurity)
    ], CloudsearchSettingsSearchapplicationsGetRequest.prototype, "security", void 0);
    return CloudsearchSettingsSearchapplicationsGetRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetRequest };
var CloudsearchSettingsSearchapplicationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsGetResponse, _super);
    function CloudsearchSettingsSearchapplicationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchApplication)
    ], CloudsearchSettingsSearchapplicationsGetResponse.prototype, "searchApplication", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsGetResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsSearchapplicationsGetResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsGetResponse };
