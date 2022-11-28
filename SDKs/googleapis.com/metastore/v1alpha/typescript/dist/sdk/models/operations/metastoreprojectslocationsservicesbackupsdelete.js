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
var MetastoreProjectsLocationsServicesBackupsDeletePathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsDeletePathParams, _super);
    function MetastoreProjectsLocationsServicesBackupsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeletePathParams.prototype, "name", void 0);
    return MetastoreProjectsLocationsServicesBackupsDeletePathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsDeletePathParams };
var MetastoreProjectsLocationsServicesBackupsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsDeleteQueryParams, _super);
    function MetastoreProjectsLocationsServicesBackupsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesBackupsDeleteQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsDeleteQueryParams };
var MetastoreProjectsLocationsServicesBackupsDeleteSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsDeleteSecurity, _super);
    function MetastoreProjectsLocationsServicesBackupsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesBackupsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesBackupsDeleteSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesBackupsDeleteSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsDeleteSecurity };
var MetastoreProjectsLocationsServicesBackupsDeleteRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsDeleteRequest, _super);
    function MetastoreProjectsLocationsServicesBackupsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesBackupsDeletePathParams)
    ], MetastoreProjectsLocationsServicesBackupsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesBackupsDeleteQueryParams)
    ], MetastoreProjectsLocationsServicesBackupsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesBackupsDeleteSecurity)
    ], MetastoreProjectsLocationsServicesBackupsDeleteRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesBackupsDeleteRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsDeleteRequest };
var MetastoreProjectsLocationsServicesBackupsDeleteResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesBackupsDeleteResponse, _super);
    function MetastoreProjectsLocationsServicesBackupsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesBackupsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], MetastoreProjectsLocationsServicesBackupsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesBackupsDeleteResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesBackupsDeleteResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesBackupsDeleteResponse };
