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
export var GetSitesNearOutputFormatOutputFormatEnum;
(function (GetSitesNearOutputFormatOutputFormatEnum) {
    GetSitesNearOutputFormatOutputFormatEnum["Json"] = "json";
    GetSitesNearOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetSitesNearOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetSitesNearOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetSitesNearOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetSitesNearOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetSitesNearOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetSitesNearOutputFormatOutputFormatEnum || (GetSitesNearOutputFormatOutputFormatEnum = {}));
var GetSitesNearOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSitesNearOutputFormatPathParams, _super);
    function GetSitesNearOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetSitesNearOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetSitesNearOutputFormatPathParams;
}(SpeakeasyBase));
export { GetSitesNearOutputFormatPathParams };
export var GetSitesNearOutputFormatLocationDescriptorEnum;
(function (GetSitesNearOutputFormatLocationDescriptorEnum) {
    GetSitesNearOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetSitesNearOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetSitesNearOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetSitesNearOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetSitesNearOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetSitesNearOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetSitesNearOutputFormatLocationDescriptorEnum || (GetSitesNearOutputFormatLocationDescriptorEnum = {}));
var GetSitesNearOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSitesNearOutputFormatQueryParams, _super);
    function GetSitesNearOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetSitesNearOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeUnits" }),
        __metadata("design:type", Boolean)
    ], GetSitesNearOutputFormatQueryParams.prototype, "excludeUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetSitesNearOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetSitesNearOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetSitesNearOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyCivic" }),
        __metadata("design:type", Boolean)
    ], GetSitesNearOutputFormatQueryParams.prototype, "onlyCivic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetSitesNearOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetSitesNearOutputFormatQueryParams.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetSitesNearOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetSitesNearOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetSitesNearOutputFormatQueryParams };
var GetSitesNearOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetSitesNearOutputFormatRequest, _super);
    function GetSitesNearOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSitesNearOutputFormatPathParams)
    ], GetSitesNearOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSitesNearOutputFormatQueryParams)
    ], GetSitesNearOutputFormatRequest.prototype, "queryParams", void 0);
    return GetSitesNearOutputFormatRequest;
}(SpeakeasyBase));
export { GetSitesNearOutputFormatRequest };
var GetSitesNearOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetSitesNearOutputFormatResponse, _super);
    function GetSitesNearOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSitesNearOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSitesNearOutputFormatResponse.prototype, "statusCode", void 0);
    return GetSitesNearOutputFormatResponse;
}(SpeakeasyBase));
export { GetSitesNearOutputFormatResponse };
