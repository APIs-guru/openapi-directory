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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudbillingProjectsUpdateBillingInfoPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoPathParams, _super);
    function CloudbillingProjectsUpdateBillingInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoPathParams.prototype, "name", void 0);
    return CloudbillingProjectsUpdateBillingInfoPathParams;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoPathParams };
var CloudbillingProjectsUpdateBillingInfoQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoQueryParams, _super);
    function CloudbillingProjectsUpdateBillingInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingProjectsUpdateBillingInfoQueryParams;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoQueryParams };
var CloudbillingProjectsUpdateBillingInfoSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoSecurityOption1, _super);
    function CloudbillingProjectsUpdateBillingInfoSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingProjectsUpdateBillingInfoSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingProjectsUpdateBillingInfoSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingProjectsUpdateBillingInfoSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoSecurityOption1 };
var CloudbillingProjectsUpdateBillingInfoSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoSecurityOption2, _super);
    function CloudbillingProjectsUpdateBillingInfoSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingProjectsUpdateBillingInfoSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingProjectsUpdateBillingInfoSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingProjectsUpdateBillingInfoSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoSecurityOption2 };
var CloudbillingProjectsUpdateBillingInfoSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoSecurity, _super);
    function CloudbillingProjectsUpdateBillingInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingProjectsUpdateBillingInfoSecurityOption1)
    ], CloudbillingProjectsUpdateBillingInfoSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingProjectsUpdateBillingInfoSecurityOption2)
    ], CloudbillingProjectsUpdateBillingInfoSecurity.prototype, "option2", void 0);
    return CloudbillingProjectsUpdateBillingInfoSecurity;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoSecurity };
var CloudbillingProjectsUpdateBillingInfoRequest = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoRequest, _super);
    function CloudbillingProjectsUpdateBillingInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingProjectsUpdateBillingInfoPathParams)
    ], CloudbillingProjectsUpdateBillingInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingProjectsUpdateBillingInfoQueryParams)
    ], CloudbillingProjectsUpdateBillingInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProjectBillingInfo)
    ], CloudbillingProjectsUpdateBillingInfoRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudbillingProjectsUpdateBillingInfoSecurity)
    ], CloudbillingProjectsUpdateBillingInfoRequest.prototype, "security", void 0);
    return CloudbillingProjectsUpdateBillingInfoRequest;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoRequest };
var CloudbillingProjectsUpdateBillingInfoResponse = /** @class */ (function (_super) {
    __extends(CloudbillingProjectsUpdateBillingInfoResponse, _super);
    function CloudbillingProjectsUpdateBillingInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudbillingProjectsUpdateBillingInfoResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProjectBillingInfo)
    ], CloudbillingProjectsUpdateBillingInfoResponse.prototype, "projectBillingInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudbillingProjectsUpdateBillingInfoResponse.prototype, "statusCode", void 0);
    return CloudbillingProjectsUpdateBillingInfoResponse;
}(SpeakeasyBase));
export { CloudbillingProjectsUpdateBillingInfoResponse };
