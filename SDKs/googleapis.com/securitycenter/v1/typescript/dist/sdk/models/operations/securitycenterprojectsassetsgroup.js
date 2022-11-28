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
var SecuritycenterProjectsAssetsGroupPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsAssetsGroupPathParams, _super);
    function SecuritycenterProjectsAssetsGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupPathParams.prototype, "parent", void 0);
    return SecuritycenterProjectsAssetsGroupPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsAssetsGroupPathParams };
var SecuritycenterProjectsAssetsGroupQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsAssetsGroupQueryParams, _super);
    function SecuritycenterProjectsAssetsGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsAssetsGroupQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsAssetsGroupQueryParams };
var SecuritycenterProjectsAssetsGroupSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsAssetsGroupSecurity, _super);
    function SecuritycenterProjectsAssetsGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsAssetsGroupSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsAssetsGroupSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsAssetsGroupSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsAssetsGroupSecurity };
var SecuritycenterProjectsAssetsGroupRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsAssetsGroupRequest, _super);
    function SecuritycenterProjectsAssetsGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsAssetsGroupPathParams)
    ], SecuritycenterProjectsAssetsGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsAssetsGroupQueryParams)
    ], SecuritycenterProjectsAssetsGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupAssetsRequest)
    ], SecuritycenterProjectsAssetsGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsAssetsGroupSecurity)
    ], SecuritycenterProjectsAssetsGroupRequest.prototype, "security", void 0);
    return SecuritycenterProjectsAssetsGroupRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsAssetsGroupRequest };
var SecuritycenterProjectsAssetsGroupResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsAssetsGroupResponse, _super);
    function SecuritycenterProjectsAssetsGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsAssetsGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupAssetsResponse)
    ], SecuritycenterProjectsAssetsGroupResponse.prototype, "groupAssetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsAssetsGroupResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsAssetsGroupResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsAssetsGroupResponse };
