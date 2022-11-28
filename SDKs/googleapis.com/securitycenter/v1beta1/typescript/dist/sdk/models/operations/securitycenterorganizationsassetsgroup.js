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
var SecuritycenterOrganizationsAssetsGroupPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsGroupPathParams, _super);
    function SecuritycenterOrganizationsAssetsGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupPathParams.prototype, "parent", void 0);
    return SecuritycenterOrganizationsAssetsGroupPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsGroupPathParams };
var SecuritycenterOrganizationsAssetsGroupQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsGroupQueryParams, _super);
    function SecuritycenterOrganizationsAssetsGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsAssetsGroupQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsGroupQueryParams };
var SecuritycenterOrganizationsAssetsGroupSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsGroupSecurity, _super);
    function SecuritycenterOrganizationsAssetsGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsAssetsGroupSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsAssetsGroupSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsAssetsGroupSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsGroupSecurity };
var SecuritycenterOrganizationsAssetsGroupRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsGroupRequest, _super);
    function SecuritycenterOrganizationsAssetsGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsAssetsGroupPathParams)
    ], SecuritycenterOrganizationsAssetsGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsAssetsGroupQueryParams)
    ], SecuritycenterOrganizationsAssetsGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupAssetsRequest)
    ], SecuritycenterOrganizationsAssetsGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsAssetsGroupSecurity)
    ], SecuritycenterOrganizationsAssetsGroupRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsAssetsGroupRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsGroupRequest };
var SecuritycenterOrganizationsAssetsGroupResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsAssetsGroupResponse, _super);
    function SecuritycenterOrganizationsAssetsGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsAssetsGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupAssetsResponse)
    ], SecuritycenterOrganizationsAssetsGroupResponse.prototype, "groupAssetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsAssetsGroupResponse.prototype, "statusCode", void 0);
    return SecuritycenterOrganizationsAssetsGroupResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsAssetsGroupResponse };
