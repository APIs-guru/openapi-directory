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
var DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams };
var DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams.prototype, "validateOnly", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams };
var DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity };
var DataplexProjectsLocationsLakesZonesEntitiesCreateRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesCreateRequest, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDataplexV1EntityInput)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesCreateRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesCreateRequest };
var DataplexProjectsLocationsLakesZonesEntitiesCreateResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesZonesEntitiesCreateResponse, _super);
    function DataplexProjectsLocationsLakesZonesEntitiesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDataplexV1Entity)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateResponse.prototype, "googleCloudDataplexV1Entity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesZonesEntitiesCreateResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesZonesEntitiesCreateResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesZonesEntitiesCreateResponse };
