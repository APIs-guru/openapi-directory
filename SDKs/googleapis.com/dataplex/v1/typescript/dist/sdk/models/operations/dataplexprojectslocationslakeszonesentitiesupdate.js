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
var DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams.prototype, "name", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams };
var DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams };
var DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity };
var DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1EntityInput)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest };
var DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDataplexV1Entity)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse.prototype, "googleCloudDataplexV1Entity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse };
