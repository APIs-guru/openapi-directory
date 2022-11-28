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
var VmmigrationProjectsLocationsTargetProjectsCreatePathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsCreatePathParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreatePathParams.prototype, "parent", void 0);
    return VmmigrationProjectsLocationsTargetProjectsCreatePathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsCreatePathParams };
var VmmigrationProjectsLocationsTargetProjectsCreateQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsCreateQueryParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetProjectId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "targetProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsTargetProjectsCreateQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsCreateQueryParams };
var VmmigrationProjectsLocationsTargetProjectsCreateSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsCreateSecurity, _super);
    function VmmigrationProjectsLocationsTargetProjectsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsTargetProjectsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsTargetProjectsCreateSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsTargetProjectsCreateSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsCreateSecurity };
var VmmigrationProjectsLocationsTargetProjectsCreateRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsCreateRequest, _super);
    function VmmigrationProjectsLocationsTargetProjectsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsCreatePathParams)
    ], VmmigrationProjectsLocationsTargetProjectsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsCreateQueryParams)
    ], VmmigrationProjectsLocationsTargetProjectsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetProjectInput)
    ], VmmigrationProjectsLocationsTargetProjectsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsCreateSecurity)
    ], VmmigrationProjectsLocationsTargetProjectsCreateRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsTargetProjectsCreateRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsCreateRequest };
var VmmigrationProjectsLocationsTargetProjectsCreateResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsCreateResponse, _super);
    function VmmigrationProjectsLocationsTargetProjectsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsTargetProjectsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsTargetProjectsCreateResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsTargetProjectsCreateResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsCreateResponse };
