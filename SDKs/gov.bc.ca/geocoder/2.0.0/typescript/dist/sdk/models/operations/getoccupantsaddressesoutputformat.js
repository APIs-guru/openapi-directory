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
export var GetOccupantsAddressesOutputFormatOutputFormatEnum;
(function (GetOccupantsAddressesOutputFormatOutputFormatEnum) {
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Json"] = "json";
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetOccupantsAddressesOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetOccupantsAddressesOutputFormatOutputFormatEnum || (GetOccupantsAddressesOutputFormatOutputFormatEnum = {}));
var GetOccupantsAddressesOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetOccupantsAddressesOutputFormatPathParams, _super);
    function GetOccupantsAddressesOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetOccupantsAddressesOutputFormatPathParams;
}(SpeakeasyBase));
export { GetOccupantsAddressesOutputFormatPathParams };
export var GetOccupantsAddressesOutputFormatInterpolationEnum;
(function (GetOccupantsAddressesOutputFormatInterpolationEnum) {
    GetOccupantsAddressesOutputFormatInterpolationEnum["Adaptive"] = "adaptive";
    GetOccupantsAddressesOutputFormatInterpolationEnum["Linear"] = "linear";
    GetOccupantsAddressesOutputFormatInterpolationEnum["None"] = "none";
})(GetOccupantsAddressesOutputFormatInterpolationEnum || (GetOccupantsAddressesOutputFormatInterpolationEnum = {}));
export var GetOccupantsAddressesOutputFormatLocationDescriptorEnum;
(function (GetOccupantsAddressesOutputFormatLocationDescriptorEnum) {
    GetOccupantsAddressesOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetOccupantsAddressesOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetOccupantsAddressesOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetOccupantsAddressesOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetOccupantsAddressesOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetOccupantsAddressesOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetOccupantsAddressesOutputFormatLocationDescriptorEnum || (GetOccupantsAddressesOutputFormatLocationDescriptorEnum = {}));
export var GetOccupantsAddressesOutputFormatStreetDirectionEnum;
(function (GetOccupantsAddressesOutputFormatStreetDirectionEnum) {
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["N"] = "N";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["S"] = "S";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["E"] = "E";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["W"] = "W";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["O"] = "O";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["Ne"] = "NE";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["No"] = "NO";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["Nw"] = "NW";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["Se"] = "SE";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["So"] = "SO";
    GetOccupantsAddressesOutputFormatStreetDirectionEnum["Sw"] = "SW";
})(GetOccupantsAddressesOutputFormatStreetDirectionEnum || (GetOccupantsAddressesOutputFormatStreetDirectionEnum = {}));
export var GetOccupantsAddressesOutputFormatUnitDesignatorEnum;
(function (GetOccupantsAddressesOutputFormatUnitDesignatorEnum) {
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Apt"] = "APT";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Bldg"] = "BLDG";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Bsmt"] = "BSMT";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Flr"] = "FLR";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Lobby"] = "LOBBY";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Lwr"] = "LWR";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Pad"] = "PAD";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Ph"] = "PH";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Rear"] = "REAR";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Rm"] = "RM";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Side"] = "SIDE";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Site"] = "SITE";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Suite"] = "SUITE";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Th"] = "TH";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Unit"] = "UNIT";
    GetOccupantsAddressesOutputFormatUnitDesignatorEnum["Uppr"] = "UPPR";
})(GetOccupantsAddressesOutputFormatUnitDesignatorEnum || (GetOccupantsAddressesOutputFormatUnitDesignatorEnum = {}));
var GetOccupantsAddressesOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetOccupantsAddressesOutputFormatQueryParams, _super);
    function GetOccupantsAddressesOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=addressString" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "addressString", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=autoComplete" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "autoComplete", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "bbox", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=centre" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "centre", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=civicNumber" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "civicNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=civicNumberSuffix" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "civicNumberSuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=echo" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "echo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=extrapolate" }),
        __metadata("design:type", Boolean)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "extrapolate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interpolation" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "interpolation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=localities" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "localities", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=localityName" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "localityName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=matchPrecision" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "matchPrecision", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=matchPrecisionNot" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "matchPrecisionNot", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minScore" }),
        __metadata("design:type", Number)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "minScore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=notLocalities" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "notLocalities", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parcelPoint" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "parcelPoint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=provinceCode" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "provinceCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "setBack", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=siteName" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "siteName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=streetDirection" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "streetDirection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=streetName" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "streetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=streetQualifier" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "streetQualifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=streetType" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "streetType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitDesignator" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "unitDesignator", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitNumber" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "unitNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitNumberSuffix" }),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatQueryParams.prototype, "unitNumberSuffix", void 0);
    return GetOccupantsAddressesOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetOccupantsAddressesOutputFormatQueryParams };
var GetOccupantsAddressesOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetOccupantsAddressesOutputFormatRequest, _super);
    function GetOccupantsAddressesOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetOccupantsAddressesOutputFormatPathParams)
    ], GetOccupantsAddressesOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetOccupantsAddressesOutputFormatQueryParams)
    ], GetOccupantsAddressesOutputFormatRequest.prototype, "queryParams", void 0);
    return GetOccupantsAddressesOutputFormatRequest;
}(SpeakeasyBase));
export { GetOccupantsAddressesOutputFormatRequest };
var GetOccupantsAddressesOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetOccupantsAddressesOutputFormatResponse, _super);
    function GetOccupantsAddressesOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOccupantsAddressesOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOccupantsAddressesOutputFormatResponse.prototype, "statusCode", void 0);
    return GetOccupantsAddressesOutputFormatResponse;
}(SpeakeasyBase));
export { GetOccupantsAddressesOutputFormatResponse };
