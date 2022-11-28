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
var CloudsearchSettingsSearchapplicationsUpdatePathParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdatePathParams, _super);
    function CloudsearchSettingsSearchapplicationsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdatePathParams.prototype, "name", void 0);
    return CloudsearchSettingsSearchapplicationsUpdatePathParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdatePathParams };
var CloudsearchSettingsSearchapplicationsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateQueryParams, _super);
    function CloudsearchSettingsSearchapplicationsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateQueryParams };
var CloudsearchSettingsSearchapplicationsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateSecurityOption1, _super);
    function CloudsearchSettingsSearchapplicationsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateSecurityOption1 };
var CloudsearchSettingsSearchapplicationsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateSecurityOption2, _super);
    function CloudsearchSettingsSearchapplicationsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateSecurityOption2 };
var CloudsearchSettingsSearchapplicationsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateSecurityOption3, _super);
    function CloudsearchSettingsSearchapplicationsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateSecurityOption3 };
var CloudsearchSettingsSearchapplicationsUpdateSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateSecurity, _super);
    function CloudsearchSettingsSearchapplicationsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsUpdateSecurityOption1)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsUpdateSecurityOption2)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsUpdateSecurityOption3)
    ], CloudsearchSettingsSearchapplicationsUpdateSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateSecurity };
var CloudsearchSettingsSearchapplicationsUpdateRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateRequest, _super);
    function CloudsearchSettingsSearchapplicationsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsUpdatePathParams)
    ], CloudsearchSettingsSearchapplicationsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsUpdateQueryParams)
    ], CloudsearchSettingsSearchapplicationsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchApplicationInput)
    ], CloudsearchSettingsSearchapplicationsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsUpdateSecurity)
    ], CloudsearchSettingsSearchapplicationsUpdateRequest.prototype, "security", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateRequest };
var CloudsearchSettingsSearchapplicationsUpdateResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsUpdateResponse, _super);
    function CloudsearchSettingsSearchapplicationsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchSettingsSearchapplicationsUpdateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsUpdateResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsSearchapplicationsUpdateResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsUpdateResponse };
