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
export var FacetsSortKeysEnum;
(function (FacetsSortKeysEnum) {
    FacetsSortKeysEnum["ScoreDesc"] = "score,,desc";
    FacetsSortKeysEnum["SpatialAreaAsc"] = "spatial_area,,asc";
    FacetsSortKeysEnum["SpatialAreaDesc"] = "spatial_area,,desc";
    FacetsSortKeysEnum["TemporalDurationAsc"] = "temporal_duration,,asc";
    FacetsSortKeysEnum["TemporalDurationDesc"] = "temporal_duration,,desc";
    FacetsSortKeysEnum["UpdatedDesc"] = "updated,,desc";
})(FacetsSortKeysEnum || (FacetsSortKeysEnum = {}));
export var FacetsSourceEnum;
(function (FacetsSourceEnum) {
    FacetsSourceEnum["Nsidc"] = "NSIDC";
    FacetsSourceEnum["Ade"] = "ADE";
})(FacetsSourceEnum || (FacetsSourceEnum = {}));
var FacetsQueryParams = /** @class */ (function (_super) {
    __extends(FacetsQueryParams, _super);
    function FacetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], FacetsQueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], FacetsQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=facetFilters" }),
        __metadata("design:type", String)
    ], FacetsQueryParams.prototype, "facetFilters", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=searchTerms" }),
        __metadata("design:type", String)
    ], FacetsQueryParams.prototype, "searchTerms", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortKeys" }),
        __metadata("design:type", String)
    ], FacetsQueryParams.prototype, "sortKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], FacetsQueryParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=spatial" }),
        __metadata("design:type", String)
    ], FacetsQueryParams.prototype, "spatial", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], FacetsQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], FacetsQueryParams.prototype, "startIndex", void 0);
    return FacetsQueryParams;
}(SpeakeasyBase));
export { FacetsQueryParams };
var FacetsRequest = /** @class */ (function (_super) {
    __extends(FacetsRequest, _super);
    function FacetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FacetsQueryParams)
    ], FacetsRequest.prototype, "queryParams", void 0);
    return FacetsRequest;
}(SpeakeasyBase));
export { FacetsRequest };
var FacetsResponse = /** @class */ (function (_super) {
    __extends(FacetsResponse, _super);
    function FacetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FacetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FacetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FacetsResponse.prototype, "facets200ApplicationNsidcfacetsPlusXmlString", void 0);
    return FacetsResponse;
}(SpeakeasyBase));
export { FacetsResponse };
