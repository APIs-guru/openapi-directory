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
var SecuritycenterProjectsSourcesFindingsGroupPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsGroupPathParams, _super);
    function SecuritycenterProjectsSourcesFindingsGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupPathParams.prototype, "parent", void 0);
    return SecuritycenterProjectsSourcesFindingsGroupPathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsGroupPathParams };
var SecuritycenterProjectsSourcesFindingsGroupQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsGroupQueryParams, _super);
    function SecuritycenterProjectsSourcesFindingsGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsSourcesFindingsGroupQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsGroupQueryParams };
var SecuritycenterProjectsSourcesFindingsGroupSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsGroupSecurity, _super);
    function SecuritycenterProjectsSourcesFindingsGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsSourcesFindingsGroupSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsSourcesFindingsGroupSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsSourcesFindingsGroupSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsGroupSecurity };
var SecuritycenterProjectsSourcesFindingsGroupRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsGroupRequest, _super);
    function SecuritycenterProjectsSourcesFindingsGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsGroupPathParams)
    ], SecuritycenterProjectsSourcesFindingsGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsGroupQueryParams)
    ], SecuritycenterProjectsSourcesFindingsGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupFindingsRequest)
    ], SecuritycenterProjectsSourcesFindingsGroupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterProjectsSourcesFindingsGroupSecurity)
    ], SecuritycenterProjectsSourcesFindingsGroupRequest.prototype, "security", void 0);
    return SecuritycenterProjectsSourcesFindingsGroupRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsGroupRequest };
var SecuritycenterProjectsSourcesFindingsGroupResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsSourcesFindingsGroupResponse, _super);
    function SecuritycenterProjectsSourcesFindingsGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsSourcesFindingsGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupFindingsResponse)
    ], SecuritycenterProjectsSourcesFindingsGroupResponse.prototype, "groupFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsSourcesFindingsGroupResponse.prototype, "statusCode", void 0);
    return SecuritycenterProjectsSourcesFindingsGroupResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsSourcesFindingsGroupResponse };
