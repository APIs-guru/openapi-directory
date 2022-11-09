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
export var GetOccupantsOccupantIdOutputFormatOutputFormatEnum;
(function (GetOccupantsOccupantIdOutputFormatOutputFormatEnum) {
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Json"] = "json";
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetOccupantsOccupantIdOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetOccupantsOccupantIdOutputFormatOutputFormatEnum || (GetOccupantsOccupantIdOutputFormatOutputFormatEnum = {}));
var GetOccupantsOccupantIdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOccupantsOccupantIdOutputFormatPathParams, _super);
    function GetOccupantsOccupantIdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=occupantID" }),
        __metadata("design:type", String)
    ], GetOccupantsOccupantIdOutputFormatPathParams.prototype, "occupantId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOccupantsOccupantIdOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOccupantsOccupantIdOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOccupantsOccupantIdOutputFormatPathParams };
export var GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum;
(function (GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum) {
    GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum || (GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum = {}));
var GetOccupantsOccupantIdOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOccupantsOccupantIdOutputFormatQueryParams, _super);
    function GetOccupantsOccupantIdOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsOccupantIdOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetOccupantsOccupantIdOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOccupantsOccupantIdOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetOccupantsOccupantIdOutputFormatQueryParams.prototype, "setBack", void 0);
    return GetOccupantsOccupantIdOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOccupantsOccupantIdOutputFormatQueryParams };
var GetOccupantsOccupantIdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOccupantsOccupantIdOutputFormatRequest, _super);
    function GetOccupantsOccupantIdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOccupantsOccupantIdOutputFormatPathParams)
    ], GetOccupantsOccupantIdOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetOccupantsOccupantIdOutputFormatQueryParams)
    ], GetOccupantsOccupantIdOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOccupantsOccupantIdOutputFormatRequest;
}(SpeakeasyBase));
export { GetOccupantsOccupantIdOutputFormatRequest };
var GetOccupantsOccupantIdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOccupantsOccupantIdOutputFormatResponse, _super);
    function GetOccupantsOccupantIdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOccupantsOccupantIdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOccupantsOccupantIdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOccupantsOccupantIdOutputFormatResponse;
}(SpeakeasyBase));
export { GetOccupantsOccupantIdOutputFormatResponse };
