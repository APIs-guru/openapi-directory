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
var SearchBySimilarityPathParams = /** @class */ (function (_super) {
    __extends(SearchBySimilarityPathParams, _super);
    function SearchBySimilarityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], SearchBySimilarityPathParams.prototype, "db", void 0);
    return SearchBySimilarityPathParams;
}(SpeakeasyBase));
export { SearchBySimilarityPathParams };
export var SearchBySimilarityTypeEnum;
(function (SearchBySimilarityTypeEnum) {
    SearchBySimilarityTypeEnum["Smiles"] = "smiles";
    SearchBySimilarityTypeEnum["Mol"] = "mol";
    SearchBySimilarityTypeEnum["Url"] = "url";
})(SearchBySimilarityTypeEnum || (SearchBySimilarityTypeEnum = {}));
var SearchBySimilarityQueryParams = /** @class */ (function (_super) {
    __extends(SearchBySimilarityQueryParams, _super);
    function SearchBySimilarityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=b64search" }),
        __metadata("design:type", String)
    ], SearchBySimilarityQueryParams.prototype, "b64search", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" }),
        __metadata("design:type", String)
    ], SearchBySimilarityQueryParams.prototype, "bundleUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dataset_uri" }),
        __metadata("design:type", String)
    ], SearchBySimilarityQueryParams.prototype, "datasetUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filterBySubstance" }),
        __metadata("design:type", Boolean)
    ], SearchBySimilarityQueryParams.prototype, "filterBySubstance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mol" }),
        __metadata("design:type", Boolean)
    ], SearchBySimilarityQueryParams.prototype, "mol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchBySimilarityQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], SearchBySimilarityQueryParams.prototype, "pagesize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sameas" }),
        __metadata("design:type", String)
    ], SearchBySimilarityQueryParams.prototype, "sameas", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SearchBySimilarityQueryParams.prototype, "search", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=threshold" }),
        __metadata("design:type", Number)
    ], SearchBySimilarityQueryParams.prototype, "threshold", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], SearchBySimilarityQueryParams.prototype, "type", void 0);
    return SearchBySimilarityQueryParams;
}(SpeakeasyBase));
export { SearchBySimilarityQueryParams };
var SearchBySimilarityRequest = /** @class */ (function (_super) {
    __extends(SearchBySimilarityRequest, _super);
    function SearchBySimilarityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchBySimilarityPathParams)
    ], SearchBySimilarityRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchBySimilarityQueryParams)
    ], SearchBySimilarityRequest.prototype, "queryParams", void 0);
    return SearchBySimilarityRequest;
}(SpeakeasyBase));
export { SearchBySimilarityRequest };
var SearchBySimilarityResponse = /** @class */ (function (_super) {
    __extends(SearchBySimilarityResponse, _super);
    function SearchBySimilarityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchBySimilarityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], SearchBySimilarityResponse.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchBySimilarityResponse.prototype, "statusCode", void 0);
    return SearchBySimilarityResponse;
}(SpeakeasyBase));
export { SearchBySimilarityResponse };
