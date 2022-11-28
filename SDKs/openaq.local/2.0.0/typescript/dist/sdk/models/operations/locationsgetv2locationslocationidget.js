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
var LocationsGetV2LocationsLocationIdGetPathParams = /** @class */ (function (_super) {
    __extends(LocationsGetV2LocationsLocationIdGetPathParams, _super);
    function LocationsGetV2LocationsLocationIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" }),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetPathParams.prototype, "locationId", void 0);
    return LocationsGetV2LocationsLocationIdGetPathParams;
}(SpeakeasyBase));
export { LocationsGetV2LocationsLocationIdGetPathParams };
var LocationsGetV2LocationsLocationIdGetQueryParams = /** @class */ (function (_super) {
    __extends(LocationsGetV2LocationsLocationIdGetQueryParams, _super);
    function LocationsGetV2LocationsLocationIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coordinates" }),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dumpRaw" }),
        __metadata("design:type", Boolean)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "dumpRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_geo" }),
        __metadata("design:type", Boolean)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "hasGeo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturerName" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "manufacturerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "modelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], LocationsGetV2LocationsLocationIdGetQueryParams.prototype, "unit", void 0);
    return LocationsGetV2LocationsLocationIdGetQueryParams;
}(SpeakeasyBase));
export { LocationsGetV2LocationsLocationIdGetQueryParams };
var LocationsGetV2LocationsLocationIdGetRequest = /** @class */ (function (_super) {
    __extends(LocationsGetV2LocationsLocationIdGetRequest, _super);
    function LocationsGetV2LocationsLocationIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LocationsGetV2LocationsLocationIdGetPathParams)
    ], LocationsGetV2LocationsLocationIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LocationsGetV2LocationsLocationIdGetQueryParams)
    ], LocationsGetV2LocationsLocationIdGetRequest.prototype, "queryParams", void 0);
    return LocationsGetV2LocationsLocationIdGetRequest;
}(SpeakeasyBase));
export { LocationsGetV2LocationsLocationIdGetRequest };
var LocationsGetV2LocationsLocationIdGetResponse = /** @class */ (function (_super) {
    __extends(LocationsGetV2LocationsLocationIdGetResponse, _super);
    function LocationsGetV2LocationsLocationIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LocationsGetV2LocationsLocationIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], LocationsGetV2LocationsLocationIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], LocationsGetV2LocationsLocationIdGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LocationsGetV2LocationsLocationIdGetResponse.prototype, "statusCode", void 0);
    return LocationsGetV2LocationsLocationIdGetResponse;
}(SpeakeasyBase));
export { LocationsGetV2LocationsLocationIdGetResponse };
