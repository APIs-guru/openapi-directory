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
export var GetOccupantsNearOutputFormatOutputFormatEnum;
(function (GetOccupantsNearOutputFormatOutputFormatEnum) {
    GetOccupantsNearOutputFormatOutputFormatEnum["Json"] = "json";
    GetOccupantsNearOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetOccupantsNearOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetOccupantsNearOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOccupantsNearOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetOccupantsNearOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetOccupantsNearOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetOccupantsNearOutputFormatOutputFormatEnum || (GetOccupantsNearOutputFormatOutputFormatEnum = {}));
var GetOccupantsNearOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOccupantsNearOutputFormatPathParams, _super);
    function GetOccupantsNearOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOccupantsNearOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOccupantsNearOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOccupantsNearOutputFormatPathParams };
export var GetOccupantsNearOutputFormatLocationDescriptorEnum;
(function (GetOccupantsNearOutputFormatLocationDescriptorEnum) {
    GetOccupantsNearOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetOccupantsNearOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetOccupantsNearOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetOccupantsNearOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetOccupantsNearOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetOccupantsNearOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetOccupantsNearOutputFormatLocationDescriptorEnum || (GetOccupantsNearOutputFormatLocationDescriptorEnum = {}));
var GetOccupantsNearOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOccupantsNearOutputFormatQueryParams, _super);
    function GetOccupantsNearOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "point", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "setBack", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GetOccupantsNearOutputFormatQueryParams.prototype, "tags", void 0);
    return GetOccupantsNearOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOccupantsNearOutputFormatQueryParams };
var GetOccupantsNearOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOccupantsNearOutputFormatRequest, _super);
    function GetOccupantsNearOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOccupantsNearOutputFormatPathParams)
    ], GetOccupantsNearOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetOccupantsNearOutputFormatQueryParams)
    ], GetOccupantsNearOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOccupantsNearOutputFormatRequest;
}(SpeakeasyBase));
export { GetOccupantsNearOutputFormatRequest };
var GetOccupantsNearOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOccupantsNearOutputFormatResponse, _super);
    function GetOccupantsNearOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOccupantsNearOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOccupantsNearOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOccupantsNearOutputFormatResponse;
}(SpeakeasyBase));
export { GetOccupantsNearOutputFormatResponse };
