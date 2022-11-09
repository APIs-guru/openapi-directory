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
export var OpenSearchSortKeysEnum;
(function (OpenSearchSortKeysEnum) {
    OpenSearchSortKeysEnum["ScoreDesc"] = "score,,desc";
    OpenSearchSortKeysEnum["SpatialAreaAsc"] = "spatial_area,,asc";
    OpenSearchSortKeysEnum["SpatialAreaDesc"] = "spatial_area,,desc";
    OpenSearchSortKeysEnum["TemporalDurationAsc"] = "temporal_duration,,asc";
    OpenSearchSortKeysEnum["TemporalDurationDesc"] = "temporal_duration,,desc";
    OpenSearchSortKeysEnum["UpdatedDesc"] = "updated,,desc";
})(OpenSearchSortKeysEnum || (OpenSearchSortKeysEnum = {}));
export var OpenSearchSourceEnum;
(function (OpenSearchSourceEnum) {
    OpenSearchSourceEnum["Nsidc"] = "NSIDC";
    OpenSearchSourceEnum["Ade"] = "ADE";
})(OpenSearchSourceEnum || (OpenSearchSourceEnum = {}));
var OpenSearchQueryParams = /** @class */ (function (_super) {
    __extends(OpenSearchQueryParams, _super);
    function OpenSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], OpenSearchQueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], OpenSearchQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=facetFilters" }),
        __metadata("design:type", String)
    ], OpenSearchQueryParams.prototype, "facetFilters", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=searchTerms" }),
        __metadata("design:type", String)
    ], OpenSearchQueryParams.prototype, "searchTerms", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortKeys" }),
        __metadata("design:type", String)
    ], OpenSearchQueryParams.prototype, "sortKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], OpenSearchQueryParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=spatial" }),
        __metadata("design:type", String)
    ], OpenSearchQueryParams.prototype, "spatial", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], OpenSearchQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], OpenSearchQueryParams.prototype, "startIndex", void 0);
    return OpenSearchQueryParams;
}(SpeakeasyBase));
export { OpenSearchQueryParams };
var OpenSearchRequest = /** @class */ (function (_super) {
    __extends(OpenSearchRequest, _super);
    function OpenSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OpenSearchQueryParams)
    ], OpenSearchRequest.prototype, "queryParams", void 0);
    return OpenSearchRequest;
}(SpeakeasyBase));
export { OpenSearchRequest };
var OpenSearchResponse = /** @class */ (function (_super) {
    __extends(OpenSearchResponse, _super);
    function OpenSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OpenSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OpenSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OpenSearchResponse.prototype, "openSearch200ApplicationAtomPlusXmlString", void 0);
    return OpenSearchResponse;
}(SpeakeasyBase));
export { OpenSearchResponse };
