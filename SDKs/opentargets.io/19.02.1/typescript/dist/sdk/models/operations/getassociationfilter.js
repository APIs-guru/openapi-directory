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
var GetAssociationFilterQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociationFilterQueryParams, _super);
    function GetAssociationFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datasource" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "datasource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datastructure" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "datastructure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datatype" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "datatype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direct" }),
        __metadata("design:type", Boolean)
    ], GetAssociationFilterQueryParams.prototype, "direct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disease" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "disease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" }),
        __metadata("design:type", Boolean)
    ], GetAssociationFilterQueryParams.prototype, "facets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Number)
    ], GetAssociationFilterQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pathway" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "pathway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scorevalue_max" }),
        __metadata("design:type", Number)
    ], GetAssociationFilterQueryParams.prototype, "scorevalueMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scorevalue_min" }),
        __metadata("design:type", Number)
    ], GetAssociationFilterQueryParams.prototype, "scorevalueMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scorevalue_types" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "scorevalueTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetAssociationFilterQueryParams.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_class" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "targetClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=therapeutic_area" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "therapeuticArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uniprotkw" }),
        __metadata("design:type", String)
    ], GetAssociationFilterQueryParams.prototype, "uniprotkw", void 0);
    return GetAssociationFilterQueryParams;
}(SpeakeasyBase));
export { GetAssociationFilterQueryParams };
var GetAssociationFilterRequest = /** @class */ (function (_super) {
    __extends(GetAssociationFilterRequest, _super);
    function GetAssociationFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAssociationFilterQueryParams)
    ], GetAssociationFilterRequest.prototype, "queryParams", void 0);
    return GetAssociationFilterRequest;
}(SpeakeasyBase));
export { GetAssociationFilterRequest };
var GetAssociationFilterResponse = /** @class */ (function (_super) {
    __extends(GetAssociationFilterResponse, _super);
    function GetAssociationFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAssociationFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAssociationFilterResponse.prototype, "statusCode", void 0);
    return GetAssociationFilterResponse;
}(SpeakeasyBase));
export { GetAssociationFilterResponse };
