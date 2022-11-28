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
export var GetOccupantsNearestOutputFormatOutputFormatEnum;
(function (GetOccupantsNearestOutputFormatOutputFormatEnum) {
    GetOccupantsNearestOutputFormatOutputFormatEnum["Json"] = "json";
    GetOccupantsNearestOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetOccupantsNearestOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetOccupantsNearestOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOccupantsNearestOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetOccupantsNearestOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetOccupantsNearestOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetOccupantsNearestOutputFormatOutputFormatEnum || (GetOccupantsNearestOutputFormatOutputFormatEnum = {}));
var GetOccupantsNearestOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOccupantsNearestOutputFormatPathParams, _super);
    function GetOccupantsNearestOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOccupantsNearestOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOccupantsNearestOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOccupantsNearestOutputFormatPathParams };
export var GetOccupantsNearestOutputFormatLocationDescriptorEnum;
(function (GetOccupantsNearestOutputFormatLocationDescriptorEnum) {
    GetOccupantsNearestOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetOccupantsNearestOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetOccupantsNearestOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetOccupantsNearestOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetOccupantsNearestOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetOccupantsNearestOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetOccupantsNearestOutputFormatLocationDescriptorEnum || (GetOccupantsNearestOutputFormatLocationDescriptorEnum = {}));
var GetOccupantsNearestOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOccupantsNearestOutputFormatQueryParams, _super);
    function GetOccupantsNearestOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "setBack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GetOccupantsNearestOutputFormatQueryParams.prototype, "tags", void 0);
    return GetOccupantsNearestOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOccupantsNearestOutputFormatQueryParams };
var GetOccupantsNearestOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOccupantsNearestOutputFormatRequest, _super);
    function GetOccupantsNearestOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOccupantsNearestOutputFormatPathParams)
    ], GetOccupantsNearestOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOccupantsNearestOutputFormatQueryParams)
    ], GetOccupantsNearestOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOccupantsNearestOutputFormatRequest;
}(SpeakeasyBase));
export { GetOccupantsNearestOutputFormatRequest };
var GetOccupantsNearestOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOccupantsNearestOutputFormatResponse, _super);
    function GetOccupantsNearestOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOccupantsNearestOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOccupantsNearestOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOccupantsNearestOutputFormatResponse;
}(SpeakeasyBase));
export { GetOccupantsNearestOutputFormatResponse };
