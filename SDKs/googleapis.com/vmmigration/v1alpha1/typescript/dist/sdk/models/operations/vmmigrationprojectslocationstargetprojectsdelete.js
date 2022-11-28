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
var VmmigrationProjectsLocationsTargetProjectsDeletePathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsDeletePathParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeletePathParams.prototype, "name", void 0);
    return VmmigrationProjectsLocationsTargetProjectsDeletePathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsDeletePathParams };
var VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams, _super);
    function VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams };
var VmmigrationProjectsLocationsTargetProjectsDeleteSecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsDeleteSecurity, _super);
    function VmmigrationProjectsLocationsTargetProjectsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteSecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsTargetProjectsDeleteSecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsDeleteSecurity };
var VmmigrationProjectsLocationsTargetProjectsDeleteRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsDeleteRequest, _super);
    function VmmigrationProjectsLocationsTargetProjectsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsDeletePathParams)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsTargetProjectsDeleteSecurity)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsTargetProjectsDeleteRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsDeleteRequest };
var VmmigrationProjectsLocationsTargetProjectsDeleteResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsTargetProjectsDeleteResponse, _super);
    function VmmigrationProjectsLocationsTargetProjectsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsTargetProjectsDeleteResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsTargetProjectsDeleteResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsTargetProjectsDeleteResponse };
