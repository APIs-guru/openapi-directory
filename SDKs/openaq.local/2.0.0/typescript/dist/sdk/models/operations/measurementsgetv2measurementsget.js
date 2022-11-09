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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var MeasurementsGetV2MeasurementsGetQueryParams = /** @class */ (function (_super) {
    __extends(MeasurementsGetV2MeasurementsGetQueryParams, _super);
    function MeasurementsGetV2MeasurementsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", Array)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=coordinates" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "coordinates", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", Array)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country_id" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "countryId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_from" }),
        __metadata("design:type", Object)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date_to" }),
        __metadata("design:type", Object)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "dateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=has_geo" }),
        __metadata("design:type", Boolean)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "hasGeo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=include_fields" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "includeFields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location_id" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Array)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter_id" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "parameterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=radius" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "radius", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sensorType" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "sensorType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", Array)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "unit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=value_from" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "valueFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=value_to" }),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetQueryParams.prototype, "valueTo", void 0);
    return MeasurementsGetV2MeasurementsGetQueryParams;
}(SpeakeasyBase));
export { MeasurementsGetV2MeasurementsGetQueryParams };
var MeasurementsGetV2MeasurementsGetRequest = /** @class */ (function (_super) {
    __extends(MeasurementsGetV2MeasurementsGetRequest, _super);
    function MeasurementsGetV2MeasurementsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MeasurementsGetV2MeasurementsGetQueryParams)
    ], MeasurementsGetV2MeasurementsGetRequest.prototype, "queryParams", void 0);
    return MeasurementsGetV2MeasurementsGetRequest;
}(SpeakeasyBase));
export { MeasurementsGetV2MeasurementsGetRequest };
var MeasurementsGetV2MeasurementsGetResponse = /** @class */ (function (_super) {
    __extends(MeasurementsGetV2MeasurementsGetResponse, _super);
    function MeasurementsGetV2MeasurementsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MeasurementsGetV2MeasurementsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], MeasurementsGetV2MeasurementsGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MeasurementsGetV2MeasurementsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], MeasurementsGetV2MeasurementsGetResponse.prototype, "measurementsGetV2MeasurementsGet200ApplicationJsonAny", void 0);
    return MeasurementsGetV2MeasurementsGetResponse;
}(SpeakeasyBase));
export { MeasurementsGetV2MeasurementsGetResponse };
