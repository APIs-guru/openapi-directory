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
export var GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum;
(function (GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum) {
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Json"] = "json";
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum || (GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum = {}));
var GetSitesSiteIdSubsitesOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdSubsitesOutputFormatPathParams, _super);
    function GetSitesSiteIdSubsitesOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdSubsitesOutputFormatPathParams.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteID" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdSubsitesOutputFormatPathParams.prototype, "siteId", void 0);
    return GetSitesSiteIdSubsitesOutputFormatPathParams;
}(SpeakeasyBase));
export { GetSitesSiteIdSubsitesOutputFormatPathParams };
export var GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum;
(function (GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum) {
    GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum || (GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum = {}));
var GetSitesSiteIdSubsitesOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdSubsitesOutputFormatQueryParams, _super);
    function GetSitesSiteIdSubsitesOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetSitesSiteIdSubsitesOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetSitesSiteIdSubsitesOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetSitesSiteIdSubsitesOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetSitesSiteIdSubsitesOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetSitesSiteIdSubsitesOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetSitesSiteIdSubsitesOutputFormatQueryParams };
var GetSitesSiteIdSubsitesOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdSubsitesOutputFormatRequest, _super);
    function GetSitesSiteIdSubsitesOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSitesSiteIdSubsitesOutputFormatPathParams)
    ], GetSitesSiteIdSubsitesOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSitesSiteIdSubsitesOutputFormatQueryParams)
    ], GetSitesSiteIdSubsitesOutputFormatRequest.prototype, "queryParams", void 0);
    return GetSitesSiteIdSubsitesOutputFormatRequest;
}(SpeakeasyBase));
export { GetSitesSiteIdSubsitesOutputFormatRequest };
var GetSitesSiteIdSubsitesOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetSitesSiteIdSubsitesOutputFormatResponse, _super);
    function GetSitesSiteIdSubsitesOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSitesSiteIdSubsitesOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSitesSiteIdSubsitesOutputFormatResponse.prototype, "statusCode", void 0);
    return GetSitesSiteIdSubsitesOutputFormatResponse;
}(SpeakeasyBase));
export { GetSitesSiteIdSubsitesOutputFormatResponse };
