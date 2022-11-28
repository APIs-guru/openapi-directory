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
var CloudbillingProjectsGetBillingInfoPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoPathParams, _super);
    function CloudbillingProjectsGetBillingInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoPathParams.prototype, "name", void 0);
    return CloudbillingProjectsGetBillingInfoPathParams;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoPathParams };
var CloudbillingProjectsGetBillingInfoQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoQueryParams, _super);
    function CloudbillingProjectsGetBillingInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingProjectsGetBillingInfoQueryParams;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoQueryParams };
var CloudbillingProjectsGetBillingInfoSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoSecurityOption1, _super);
    function CloudbillingProjectsGetBillingInfoSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingProjectsGetBillingInfoSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingProjectsGetBillingInfoSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingProjectsGetBillingInfoSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoSecurityOption1 };
var CloudbillingProjectsGetBillingInfoSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoSecurityOption2, _super);
    function CloudbillingProjectsGetBillingInfoSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingProjectsGetBillingInfoSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingProjectsGetBillingInfoSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingProjectsGetBillingInfoSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoSecurityOption2 };
var CloudbillingProjectsGetBillingInfoSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoSecurityOption3, _super);
    function CloudbillingProjectsGetBillingInfoSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingProjectsGetBillingInfoSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingProjectsGetBillingInfoSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingProjectsGetBillingInfoSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoSecurityOption3 };
var CloudbillingProjectsGetBillingInfoSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoSecurity, _super);
    function CloudbillingProjectsGetBillingInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingProjectsGetBillingInfoSecurityOption1)
    ], CloudbillingProjectsGetBillingInfoSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingProjectsGetBillingInfoSecurityOption2)
    ], CloudbillingProjectsGetBillingInfoSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingProjectsGetBillingInfoSecurityOption3)
    ], CloudbillingProjectsGetBillingInfoSecurity.prototype, "option3", void 0);
    return CloudbillingProjectsGetBillingInfoSecurity;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoSecurity };
var CloudbillingProjectsGetBillingInfoRequest = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoRequest, _super);
    function CloudbillingProjectsGetBillingInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingProjectsGetBillingInfoPathParams)
    ], CloudbillingProjectsGetBillingInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingProjectsGetBillingInfoQueryParams)
    ], CloudbillingProjectsGetBillingInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingProjectsGetBillingInfoSecurity)
    ], CloudbillingProjectsGetBillingInfoRequest.prototype, "security", void 0);
    return CloudbillingProjectsGetBillingInfoRequest;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoRequest };
var CloudbillingProjectsGetBillingInfoResponse = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsGetBillingInfoResponse, _super);
    function CloudbillingProjectsGetBillingInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbillingProjectsGetBillingInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProjectBillingInfo)
    ], CloudbillingProjectsGetBillingInfoResponse.prototype, "projectBillingInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbillingProjectsGetBillingInfoResponse.prototype, "statusCode", void 0);
    return CloudbillingProjectsGetBillingInfoResponse;
}(SpeakeasyBase));
export { CloudbillingProjectsGetBillingInfoResponse };
