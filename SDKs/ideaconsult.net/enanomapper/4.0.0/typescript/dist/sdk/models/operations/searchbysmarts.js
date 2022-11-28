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
var SearchBySmartsPathParams = /** @class */ (function (_super) {
    __extends(SearchBySmartsPathParams, _super);
    function SearchBySmartsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], SearchBySmartsPathParams.prototype, "db", void 0);
    return SearchBySmartsPathParams;
}(SpeakeasyBase));
export { SearchBySmartsPathParams };
export var SearchBySmartsTypeEnum;
(function (SearchBySmartsTypeEnum) {
    SearchBySmartsTypeEnum["Smiles"] = "smiles";
    SearchBySmartsTypeEnum["Mol"] = "mol";
    SearchBySmartsTypeEnum["Url"] = "url";
})(SearchBySmartsTypeEnum || (SearchBySmartsTypeEnum = {}));
var SearchBySmartsQueryParams = /** @class */ (function (_super) {
    __extends(SearchBySmartsQueryParams, _super);
    function SearchBySmartsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=b64search" }),
        __metadata("design:type", String)
    ], SearchBySmartsQueryParams.prototype, "b64search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" }),
        __metadata("design:type", String)
    ], SearchBySmartsQueryParams.prototype, "bundleUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset_uri" }),
        __metadata("design:type", String)
    ], SearchBySmartsQueryParams.prototype, "datasetUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterBySubstance" }),
        __metadata("design:type", Boolean)
    ], SearchBySmartsQueryParams.prototype, "filterBySubstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mol" }),
        __metadata("design:type", Boolean)
    ], SearchBySmartsQueryParams.prototype, "mol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchBySmartsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], SearchBySmartsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sameas" }),
        __metadata("design:type", String)
    ], SearchBySmartsQueryParams.prototype, "sameas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SearchBySmartsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], SearchBySmartsQueryParams.prototype, "type", void 0);
    return SearchBySmartsQueryParams;
}(SpeakeasyBase));
export { SearchBySmartsQueryParams };
var SearchBySmartsRequest = /** @class */ (function (_super) {
    __extends(SearchBySmartsRequest, _super);
    function SearchBySmartsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchBySmartsPathParams)
    ], SearchBySmartsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchBySmartsQueryParams)
    ], SearchBySmartsRequest.prototype, "queryParams", void 0);
    return SearchBySmartsRequest;
}(SpeakeasyBase));
export { SearchBySmartsRequest };
var SearchBySmartsResponse = /** @class */ (function (_super) {
    __extends(SearchBySmartsResponse, _super);
    function SearchBySmartsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchBySmartsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dataset)
    ], SearchBySmartsResponse.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchBySmartsResponse.prototype, "statusCode", void 0);
    return SearchBySmartsResponse;
}(SpeakeasyBase));
export { SearchBySmartsResponse };
