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
var SecuritycenterOrganizationsSourcesFindingsGroupPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsGroupPathParams, _super);
    function SecuritycenterOrganizationsSourcesFindingsGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupPathParams.prototype, "parent", void 0);
    return SecuritycenterOrganizationsSourcesFindingsGroupPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsGroupPathParams };
var SecuritycenterOrganizationsSourcesFindingsGroupQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsGroupQueryParams, _super);
    function SecuritycenterOrganizationsSourcesFindingsGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsSourcesFindingsGroupQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsGroupQueryParams };
var SecuritycenterOrganizationsSourcesFindingsGroupSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsGroupSecurity, _super);
    function SecuritycenterOrganizationsSourcesFindingsGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsSourcesFindingsGroupSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsSourcesFindingsGroupSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsSourcesFindingsGroupSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsGroupSecurity };
var SecuritycenterOrganizationsSourcesFindingsGroupRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsGroupRequest, _super);
    function SecuritycenterOrganizationsSourcesFindingsGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsGroupPathParams)
    ], SecuritycenterOrganizationsSourcesFindingsGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsGroupQueryParams)
    ], SecuritycenterOrganizationsSourcesFindingsGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupFindingsRequest)
    ], SecuritycenterOrganizationsSourcesFindingsGroupRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesFindingsGroupSecurity)
    ], SecuritycenterOrganizationsSourcesFindingsGroupRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsSourcesFindingsGroupRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsGroupRequest };
var SecuritycenterOrganizationsSourcesFindingsGroupResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesFindingsGroupResponse, _super);
    function SecuritycenterOrganizationsSourcesFindingsGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesFindingsGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GroupFindingsResponse)
    ], SecuritycenterOrganizationsSourcesFindingsGroupResponse.prototype, "groupFindingsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesFindingsGroupResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsSourcesFindingsGroupResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesFindingsGroupResponse };
