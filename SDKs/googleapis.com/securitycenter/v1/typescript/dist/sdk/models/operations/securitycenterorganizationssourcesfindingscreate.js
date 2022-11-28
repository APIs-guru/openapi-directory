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
var SecuritycenterOrganizationsSourcesFindingsCreatePathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsCreatePathParams, _super);
    function SecuritycenterOrganizationsSourcesFindingsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreatePathParams.prototype, "parent", void 0);
    return SecuritycenterOrganizationsSourcesFindingsCreatePathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsCreatePathParams };
var SecuritycenterOrganizationsSourcesFindingsCreateQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsCreateQueryParams, _super);
    function SecuritycenterOrganizationsSourcesFindingsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=findingId" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "findingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsSourcesFindingsCreateQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsCreateQueryParams };
var SecuritycenterOrganizationsSourcesFindingsCreateSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsCreateSecurity, _super);
    function SecuritycenterOrganizationsSourcesFindingsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsSourcesFindingsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsSourcesFindingsCreateSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsSourcesFindingsCreateSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsCreateSecurity };
var SecuritycenterOrganizationsSourcesFindingsCreateRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsCreateRequest, _super);
    function SecuritycenterOrganizationsSourcesFindingsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsCreatePathParams)
    ], SecuritycenterOrganizationsSourcesFindingsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsCreateQueryParams)
    ], SecuritycenterOrganizationsSourcesFindingsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FindingInput)
    ], SecuritycenterOrganizationsSourcesFindingsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsCreateSecurity)
    ], SecuritycenterOrganizationsSourcesFindingsCreateRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsSourcesFindingsCreateRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsCreateRequest };
var SecuritycenterOrganizationsSourcesFindingsCreateResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsCreateResponse, _super);
    function SecuritycenterOrganizationsSourcesFindingsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Finding)
    ], SecuritycenterOrganizationsSourcesFindingsCreateResponse.prototype, "finding", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesFindingsCreateResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsSourcesFindingsCreateResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsCreateResponse };
