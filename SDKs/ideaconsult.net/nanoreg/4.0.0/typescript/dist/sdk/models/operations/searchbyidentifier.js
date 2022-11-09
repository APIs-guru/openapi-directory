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
export var SearchByIdentifierRepresentationEnum;
(function (SearchByIdentifierRepresentationEnum) {
    SearchByIdentifierRepresentationEnum["All"] = "all";
    SearchByIdentifierRepresentationEnum["Smiles"] = "smiles";
    SearchByIdentifierRepresentationEnum["Reach"] = "reach";
    SearchByIdentifierRepresentationEnum["Stdinchi"] = "stdinchi";
    SearchByIdentifierRepresentationEnum["Stdinchikey"] = "stdinchikey";
    SearchByIdentifierRepresentationEnum["Names"] = "names";
    SearchByIdentifierRepresentationEnum["IupacName"] = "iupac_name";
    SearchByIdentifierRepresentationEnum["Synonym"] = "synonym";
    SearchByIdentifierRepresentationEnum["Cas"] = "cas";
    SearchByIdentifierRepresentationEnum["Einecs"] = "einecs";
})(SearchByIdentifierRepresentationEnum || (SearchByIdentifierRepresentationEnum = {}));
export var SearchByIdentifierTermEnum;
(function (SearchByIdentifierTermEnum) {
    SearchByIdentifierTermEnum["Search"] = "search";
    SearchByIdentifierTermEnum["Url"] = "url";
    SearchByIdentifierTermEnum["Inchikey"] = "inchikey";
})(SearchByIdentifierTermEnum || (SearchByIdentifierTermEnum = {}));
var SearchByIdentifierPathParams = /** @class */ (function (_super) {
    __extends(SearchByIdentifierPathParams, _super);
    function SearchByIdentifierPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], SearchByIdentifierPathParams.prototype, "db", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=representation" }),
        __metadata("design:type", String)
    ], SearchByIdentifierPathParams.prototype, "representation", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=term" }),
        __metadata("design:type", String)
    ], SearchByIdentifierPathParams.prototype, "term", void 0);
    return SearchByIdentifierPathParams;
}(SpeakeasyBase));
export { SearchByIdentifierPathParams };
var SearchByIdentifierQueryParams = /** @class */ (function (_super) {
    __extends(SearchByIdentifierQueryParams, _super);
    function SearchByIdentifierQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=b64search" }),
        __metadata("design:type", String)
    ], SearchByIdentifierQueryParams.prototype, "b64search", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" }),
        __metadata("design:type", String)
    ], SearchByIdentifierQueryParams.prototype, "bundleUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=casesens" }),
        __metadata("design:type", Boolean)
    ], SearchByIdentifierQueryParams.prototype, "casesens", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SearchByIdentifierQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], SearchByIdentifierQueryParams.prototype, "pagesize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sameas" }),
        __metadata("design:type", String)
    ], SearchByIdentifierQueryParams.prototype, "sameas", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SearchByIdentifierQueryParams.prototype, "search", void 0);
    return SearchByIdentifierQueryParams;
}(SpeakeasyBase));
export { SearchByIdentifierQueryParams };
var SearchByIdentifierRequest = /** @class */ (function (_super) {
    __extends(SearchByIdentifierRequest, _super);
    function SearchByIdentifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchByIdentifierPathParams)
    ], SearchByIdentifierRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchByIdentifierQueryParams)
    ], SearchByIdentifierRequest.prototype, "queryParams", void 0);
    return SearchByIdentifierRequest;
}(SpeakeasyBase));
export { SearchByIdentifierRequest };
var SearchByIdentifierResponse = /** @class */ (function (_super) {
    __extends(SearchByIdentifierResponse, _super);
    function SearchByIdentifierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchByIdentifierResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], SearchByIdentifierResponse.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchByIdentifierResponse.prototype, "statusCode", void 0);
    return SearchByIdentifierResponse;
}(SpeakeasyBase));
export { SearchByIdentifierResponse };
