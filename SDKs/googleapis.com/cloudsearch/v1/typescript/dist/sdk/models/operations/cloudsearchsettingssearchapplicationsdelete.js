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
var CloudsearchSettingsSearchapplicationsDeletePathParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeletePathParams, _super);
    function CloudsearchSettingsSearchapplicationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeletePathParams.prototype, "name", void 0);
    return CloudsearchSettingsSearchapplicationsDeletePathParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeletePathParams };
var CloudsearchSettingsSearchapplicationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteQueryParams, _super);
    function CloudsearchSettingsSearchapplicationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteQueryParams };
var CloudsearchSettingsSearchapplicationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteSecurityOption1, _super);
    function CloudsearchSettingsSearchapplicationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteSecurityOption1 };
var CloudsearchSettingsSearchapplicationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteSecurityOption2, _super);
    function CloudsearchSettingsSearchapplicationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteSecurityOption2 };
var CloudsearchSettingsSearchapplicationsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteSecurityOption3, _super);
    function CloudsearchSettingsSearchapplicationsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteSecurityOption3 };
var CloudsearchSettingsSearchapplicationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteSecurity, _super);
    function CloudsearchSettingsSearchapplicationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsDeleteSecurityOption1)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsDeleteSecurityOption2)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsDeleteSecurityOption3)
    ], CloudsearchSettingsSearchapplicationsDeleteSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteSecurity };
var CloudsearchSettingsSearchapplicationsDeleteRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteRequest, _super);
    function CloudsearchSettingsSearchapplicationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsDeletePathParams)
    ], CloudsearchSettingsSearchapplicationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsDeleteQueryParams)
    ], CloudsearchSettingsSearchapplicationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsDeleteSecurity)
    ], CloudsearchSettingsSearchapplicationsDeleteRequest.prototype, "security", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteRequest };
var CloudsearchSettingsSearchapplicationsDeleteResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsDeleteResponse, _super);
    function CloudsearchSettingsSearchapplicationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchSettingsSearchapplicationsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsDeleteResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsSearchapplicationsDeleteResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsDeleteResponse };
