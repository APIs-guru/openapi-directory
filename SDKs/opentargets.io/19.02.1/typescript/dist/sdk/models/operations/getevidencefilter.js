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
var GetEvidenceFilterQueryParams = /** @class */ (function (_super) {
    __extends(GetEvidenceFilterQueryParams, _super);
    function GetEvidenceFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=data source" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "dataSource", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=datastructure" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "datastructure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=datatype" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "datatype", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=disease" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "disease", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Number)
    ], GetEvidenceFilterQueryParams.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pathway" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "pathway", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=scorevalue_max" }),
        __metadata("design:type", Number)
    ], GetEvidenceFilterQueryParams.prototype, "scorevalueMax", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=scorevalue_min" }),
        __metadata("design:type", Number)
    ], GetEvidenceFilterQueryParams.prototype, "scorevalueMin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetEvidenceFilterQueryParams.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=target" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "target", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uniprotkw" }),
        __metadata("design:type", String)
    ], GetEvidenceFilterQueryParams.prototype, "uniprotkw", void 0);
    return GetEvidenceFilterQueryParams;
}(SpeakeasyBase));
export { GetEvidenceFilterQueryParams };
var GetEvidenceFilterRequest = /** @class */ (function (_super) {
    __extends(GetEvidenceFilterRequest, _super);
    function GetEvidenceFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEvidenceFilterQueryParams)
    ], GetEvidenceFilterRequest.prototype, "queryParams", void 0);
    return GetEvidenceFilterRequest;
}(SpeakeasyBase));
export { GetEvidenceFilterRequest };
var GetEvidenceFilterResponse = /** @class */ (function (_super) {
    __extends(GetEvidenceFilterResponse, _super);
    function GetEvidenceFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEvidenceFilterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEvidenceFilterResponse.prototype, "statusCode", void 0);
    return GetEvidenceFilterResponse;
}(SpeakeasyBase));
export { GetEvidenceFilterResponse };
