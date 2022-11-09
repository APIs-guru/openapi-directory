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
var SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams, _super);
    function SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams.prototype, "name", void 0);
    return SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams };
var SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams, _super);
    function SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams };
var SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity, _super);
    function SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity };
var SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest, _super);
    function SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudSecuritycenterV1beta1SecurityMarks)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest };
var SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse, _super);
    function SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudSecuritycenterV1beta1SecurityMarks)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse.prototype, "googleCloudSecuritycenterV1beta1SecurityMarks", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse };
