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
export var GetSitesNearestOutputFormatOutputFormatEnum;
(function (GetSitesNearestOutputFormatOutputFormatEnum) {
    GetSitesNearestOutputFormatOutputFormatEnum["Json"] = "json";
    GetSitesNearestOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetSitesNearestOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetSitesNearestOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetSitesNearestOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetSitesNearestOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetSitesNearestOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetSitesNearestOutputFormatOutputFormatEnum || (GetSitesNearestOutputFormatOutputFormatEnum = {}));
var GetSitesNearestOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSitesNearestOutputFormatPathParams, _super);
    function GetSitesNearestOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetSitesNearestOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetSitesNearestOutputFormatPathParams;
}(SpeakeasyBase));
export { GetSitesNearestOutputFormatPathParams };
export var GetSitesNearestOutputFormatLocationDescriptorEnum;
(function (GetSitesNearestOutputFormatLocationDescriptorEnum) {
    GetSitesNearestOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetSitesNearestOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetSitesNearestOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetSitesNearestOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetSitesNearestOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetSitesNearestOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetSitesNearestOutputFormatLocationDescriptorEnum || (GetSitesNearestOutputFormatLocationDescriptorEnum = {}));
var GetSitesNearestOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSitesNearestOutputFormatQueryParams, _super);
    function GetSitesNearestOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeUnits" }),
        __metadata("design:type", Boolean)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "excludeUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyCivic" }),
        __metadata("design:type", Boolean)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "onlyCivic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetSitesNearestOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetSitesNearestOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetSitesNearestOutputFormatQueryParams };
var GetSitesNearestOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetSitesNearestOutputFormatRequest, _super);
    function GetSitesNearestOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSitesNearestOutputFormatPathParams)
    ], GetSitesNearestOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSitesNearestOutputFormatQueryParams)
    ], GetSitesNearestOutputFormatRequest.prototype, "queryParams", void 0);
    return GetSitesNearestOutputFormatRequest;
}(SpeakeasyBase));
export { GetSitesNearestOutputFormatRequest };
var GetSitesNearestOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetSitesNearestOutputFormatResponse, _super);
    function GetSitesNearestOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSitesNearestOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSitesNearestOutputFormatResponse.prototype, "statusCode", void 0);
    return GetSitesNearestOutputFormatResponse;
}(SpeakeasyBase));
export { GetSitesNearestOutputFormatResponse };
