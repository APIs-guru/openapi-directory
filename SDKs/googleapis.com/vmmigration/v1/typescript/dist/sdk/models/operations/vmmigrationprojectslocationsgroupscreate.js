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
var VmmigrationProjectsLocationsGroupsCreatePathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsCreatePathParams, _super);
    function VmmigrationProjectsLocationsGroupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreatePathParams.prototype, "parent", void 0);
    return VmmigrationProjectsLocationsGroupsCreatePathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsCreatePathParams };
var VmmigrationProjectsLocationsGroupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsCreateQueryParams, _super);
    function VmmigrationProjectsLocationsGroupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsGroupsCreateQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsCreateQueryParams };
var VmmigrationProjectsLocationsGroupsCreateSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsCreateSecurity, _super);
    function VmmigrationProjectsLocationsGroupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsGroupsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsGroupsCreateSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsGroupsCreateSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsCreateSecurity };
var VmmigrationProjectsLocationsGroupsCreateRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsCreateRequest, _super);
    function VmmigrationProjectsLocationsGroupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsCreatePathParams)
    ], VmmigrationProjectsLocationsGroupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsCreateQueryParams)
    ], VmmigrationProjectsLocationsGroupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupInput)
    ], VmmigrationProjectsLocationsGroupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsGroupsCreateSecurity)
    ], VmmigrationProjectsLocationsGroupsCreateRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsGroupsCreateRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsCreateRequest };
var VmmigrationProjectsLocationsGroupsCreateResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsGroupsCreateResponse, _super);
    function VmmigrationProjectsLocationsGroupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsGroupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsGroupsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsGroupsCreateResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsGroupsCreateResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsGroupsCreateResponse };
