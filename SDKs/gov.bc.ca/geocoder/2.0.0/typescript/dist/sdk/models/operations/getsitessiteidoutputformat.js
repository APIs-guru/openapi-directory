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
export var GetSitesSiteIdOutputFormatOutputFormatEnum;
(function (GetSitesSiteIdOutputFormatOutputFormatEnum) {
    GetSitesSiteIdOutputFormatOutputFormatEnum["Json"] = "json";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetSitesSiteIdOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetSitesSiteIdOutputFormatOutputFormatEnum || (GetSitesSiteIdOutputFormatOutputFormatEnum = {}));
var GetSitesSiteIdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatPathParams, _super);
    function GetSitesSiteIdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatPathParams.prototype, "outputFormat", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=siteID" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatPathParams.prototype, "siteId", void 0);
    return GetSitesSiteIdOutputFormatPathParams;
}(SpeakeasyBase));
export { GetSitesSiteIdOutputFormatPathParams };
export var GetSitesSiteIdOutputFormatLocationDescriptorEnum;
(function (GetSitesSiteIdOutputFormatLocationDescriptorEnum) {
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetSitesSiteIdOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetSitesSiteIdOutputFormatLocationDescriptorEnum || (GetSitesSiteIdOutputFormatLocationDescriptorEnum = {}));
var GetSitesSiteIdOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatQueryParams, _super);
    function GetSitesSiteIdOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetSitesSiteIdOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetSitesSiteIdOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetSitesSiteIdOutputFormatQueryParams };
var GetSitesSiteIdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatRequest, _super);
    function GetSitesSiteIdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSitesSiteIdOutputFormatPathParams)
    ], GetSitesSiteIdOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSitesSiteIdOutputFormatQueryParams)
    ], GetSitesSiteIdOutputFormatRequest.prototype, "queryParams", void 0);
    return GetSitesSiteIdOutputFormatRequest;
}(SpeakeasyBase));
export { GetSitesSiteIdOutputFormatRequest };
var GetSitesSiteIdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdOutputFormatResponse, _super);
    function GetSitesSiteIdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSitesSiteIdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSitesSiteIdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetSitesSiteIdOutputFormatResponse;
}(SpeakeasyBase));
export { GetSitesSiteIdOutputFormatResponse };
