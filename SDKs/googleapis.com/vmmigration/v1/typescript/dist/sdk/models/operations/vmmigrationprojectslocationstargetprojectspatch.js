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
var VmmigrationProjectsLocationsTargetProjectsPatchPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsPatchPathParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchPathParams.prototype, "name", void 0);
    return VmmigrationProjectsLocationsTargetProjectsPatchPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsPatchPathParams };
var VmmigrationProjectsLocationsTargetProjectsPatchQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsPatchQueryParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsTargetProjectsPatchQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsPatchQueryParams };
var VmmigrationProjectsLocationsTargetProjectsPatchSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsPatchSecurity, _super);
    function VmmigrationProjectsLocationsTargetProjectsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsTargetProjectsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsTargetProjectsPatchSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsTargetProjectsPatchSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsPatchSecurity };
var VmmigrationProjectsLocationsTargetProjectsPatchRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsPatchRequest, _super);
    function VmmigrationProjectsLocationsTargetProjectsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsPatchPathParams)
    ], VmmigrationProjectsLocationsTargetProjectsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsPatchQueryParams)
    ], VmmigrationProjectsLocationsTargetProjectsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TargetProjectInput)
    ], VmmigrationProjectsLocationsTargetProjectsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsPatchSecurity)
    ], VmmigrationProjectsLocationsTargetProjectsPatchRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsTargetProjectsPatchRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsPatchRequest };
var VmmigrationProjectsLocationsTargetProjectsPatchResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsPatchResponse, _super);
    function VmmigrationProjectsLocationsTargetProjectsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsTargetProjectsPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsTargetProjectsPatchResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsTargetProjectsPatchResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsPatchResponse };
