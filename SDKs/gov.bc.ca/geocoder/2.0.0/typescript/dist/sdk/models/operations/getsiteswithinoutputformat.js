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
export var GetSitesWithinOutputFormatOutputFormatEnum;
(function (GetSitesWithinOutputFormatOutputFormatEnum) {
    GetSitesWithinOutputFormatOutputFormatEnum["Json"] = "json";
    GetSitesWithinOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetSitesWithinOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetSitesWithinOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetSitesWithinOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetSitesWithinOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetSitesWithinOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetSitesWithinOutputFormatOutputFormatEnum || (GetSitesWithinOutputFormatOutputFormatEnum = {}));
var GetSitesWithinOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSitesWithinOutputFormatPathParams, _super);
    function GetSitesWithinOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetSitesWithinOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetSitesWithinOutputFormatPathParams;
}(SpeakeasyBase));
export { GetSitesWithinOutputFormatPathParams };
export var GetSitesWithinOutputFormatLocationDescriptorEnum;
(function (GetSitesWithinOutputFormatLocationDescriptorEnum) {
    GetSitesWithinOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetSitesWithinOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetSitesWithinOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetSitesWithinOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetSitesWithinOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetSitesWithinOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetSitesWithinOutputFormatLocationDescriptorEnum || (GetSitesWithinOutputFormatLocationDescriptorEnum = {}));
var GetSitesWithinOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSitesWithinOutputFormatQueryParams, _super);
    function GetSitesWithinOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "bbox", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=excludeUnits" }),
        __metadata("design:type", Boolean)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "excludeUnits", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=onlyCivic" }),
        __metadata("design:type", Boolean)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "onlyCivic", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetSitesWithinOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetSitesWithinOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetSitesWithinOutputFormatQueryParams };
var GetSitesWithinOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetSitesWithinOutputFormatRequest, _super);
    function GetSitesWithinOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSitesWithinOutputFormatPathParams)
    ], GetSitesWithinOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSitesWithinOutputFormatQueryParams)
    ], GetSitesWithinOutputFormatRequest.prototype, "queryParams", void 0);
    return GetSitesWithinOutputFormatRequest;
}(SpeakeasyBase));
export { GetSitesWithinOutputFormatRequest };
var GetSitesWithinOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetSitesWithinOutputFormatResponse, _super);
    function GetSitesWithinOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSitesWithinOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSitesWithinOutputFormatResponse.prototype, "statusCode", void 0);
    return GetSitesWithinOutputFormatResponse;
}(SpeakeasyBase));
export { GetSitesWithinOutputFormatResponse };
