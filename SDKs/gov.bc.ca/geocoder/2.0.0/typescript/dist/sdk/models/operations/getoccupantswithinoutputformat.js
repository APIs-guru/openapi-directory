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
export var GetOccupantsWithinOutputFormatOutputFormatEnum;
(function (GetOccupantsWithinOutputFormatOutputFormatEnum) {
    GetOccupantsWithinOutputFormatOutputFormatEnum["Json"] = "json";
    GetOccupantsWithinOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetOccupantsWithinOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetOccupantsWithinOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOccupantsWithinOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetOccupantsWithinOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetOccupantsWithinOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetOccupantsWithinOutputFormatOutputFormatEnum || (GetOccupantsWithinOutputFormatOutputFormatEnum = {}));
var GetOccupantsWithinOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOccupantsWithinOutputFormatPathParams, _super);
    function GetOccupantsWithinOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOccupantsWithinOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOccupantsWithinOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOccupantsWithinOutputFormatPathParams };
export var GetOccupantsWithinOutputFormatLocationDescriptorEnum;
(function (GetOccupantsWithinOutputFormatLocationDescriptorEnum) {
    GetOccupantsWithinOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetOccupantsWithinOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetOccupantsWithinOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetOccupantsWithinOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetOccupantsWithinOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetOccupantsWithinOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetOccupantsWithinOutputFormatLocationDescriptorEnum || (GetOccupantsWithinOutputFormatLocationDescriptorEnum = {}));
var GetOccupantsWithinOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOccupantsWithinOutputFormatQueryParams, _super);
    function GetOccupantsWithinOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "setBack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GetOccupantsWithinOutputFormatQueryParams.prototype, "tags", void 0);
    return GetOccupantsWithinOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOccupantsWithinOutputFormatQueryParams };
var GetOccupantsWithinOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOccupantsWithinOutputFormatRequest, _super);
    function GetOccupantsWithinOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOccupantsWithinOutputFormatPathParams)
    ], GetOccupantsWithinOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOccupantsWithinOutputFormatQueryParams)
    ], GetOccupantsWithinOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOccupantsWithinOutputFormatRequest;
}(SpeakeasyBase));
export { GetOccupantsWithinOutputFormatRequest };
var GetOccupantsWithinOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOccupantsWithinOutputFormatResponse, _super);
    function GetOccupantsWithinOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOccupantsWithinOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOccupantsWithinOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOccupantsWithinOutputFormatResponse;
}(SpeakeasyBase));
export { GetOccupantsWithinOutputFormatResponse };
