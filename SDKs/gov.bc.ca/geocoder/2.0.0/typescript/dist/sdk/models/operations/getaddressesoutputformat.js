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
export var GetAddressesOutputFormatOutputFormatEnum;
(function (GetAddressesOutputFormatOutputFormatEnum) {
    GetAddressesOutputFormatOutputFormatEnum["Json"] = "json";
    GetAddressesOutputFormatOutputFormatEnum["Geojson"] = "geojson";
    GetAddressesOutputFormatOutputFormatEnum["Xhtml"] = "xhtml";
    GetAddressesOutputFormatOutputFormatEnum["Kml"] = "kml";
    GetAddressesOutputFormatOutputFormatEnum["Gml"] = "gml";
    GetAddressesOutputFormatOutputFormatEnum["Csv"] = "csv";
    GetAddressesOutputFormatOutputFormatEnum["Shpz"] = "shpz";
})(GetAddressesOutputFormatOutputFormatEnum || (GetAddressesOutputFormatOutputFormatEnum = {}));
var GetAddressesOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetAddressesOutputFormatPathParams, _super);
    function GetAddressesOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetAddressesOutputFormatPathParams;
}(SpeakeasyBase));
export { GetAddressesOutputFormatPathParams };
export var GetAddressesOutputFormatInterpolationEnum;
(function (GetAddressesOutputFormatInterpolationEnum) {
    GetAddressesOutputFormatInterpolationEnum["Adaptive"] = "adaptive";
    GetAddressesOutputFormatInterpolationEnum["Linear"] = "linear";
    GetAddressesOutputFormatInterpolationEnum["None"] = "none";
})(GetAddressesOutputFormatInterpolationEnum || (GetAddressesOutputFormatInterpolationEnum = {}));
export var GetAddressesOutputFormatLocationDescriptorEnum;
(function (GetAddressesOutputFormatLocationDescriptorEnum) {
    GetAddressesOutputFormatLocationDescriptorEnum["Any"] = "any";
    GetAddressesOutputFormatLocationDescriptorEnum["AccessPoint"] = "accessPoint";
    GetAddressesOutputFormatLocationDescriptorEnum["FrontDoorPoint"] = "frontDoorPoint";
    GetAddressesOutputFormatLocationDescriptorEnum["ParcelPoint"] = "parcelPoint";
    GetAddressesOutputFormatLocationDescriptorEnum["RooftopPoint"] = "rooftopPoint";
    GetAddressesOutputFormatLocationDescriptorEnum["RoutingPoint"] = "routingPoint";
})(GetAddressesOutputFormatLocationDescriptorEnum || (GetAddressesOutputFormatLocationDescriptorEnum = {}));
export var GetAddressesOutputFormatStreetDirectionEnum;
(function (GetAddressesOutputFormatStreetDirectionEnum) {
    GetAddressesOutputFormatStreetDirectionEnum["N"] = "N";
    GetAddressesOutputFormatStreetDirectionEnum["S"] = "S";
    GetAddressesOutputFormatStreetDirectionEnum["E"] = "E";
    GetAddressesOutputFormatStreetDirectionEnum["W"] = "W";
    GetAddressesOutputFormatStreetDirectionEnum["O"] = "O";
    GetAddressesOutputFormatStreetDirectionEnum["Ne"] = "NE";
    GetAddressesOutputFormatStreetDirectionEnum["No"] = "NO";
    GetAddressesOutputFormatStreetDirectionEnum["Nw"] = "NW";
    GetAddressesOutputFormatStreetDirectionEnum["Se"] = "SE";
    GetAddressesOutputFormatStreetDirectionEnum["So"] = "SO";
    GetAddressesOutputFormatStreetDirectionEnum["Sw"] = "SW";
})(GetAddressesOutputFormatStreetDirectionEnum || (GetAddressesOutputFormatStreetDirectionEnum = {}));
export var GetAddressesOutputFormatUnitDesignatorEnum;
(function (GetAddressesOutputFormatUnitDesignatorEnum) {
    GetAddressesOutputFormatUnitDesignatorEnum["Apt"] = "APT";
    GetAddressesOutputFormatUnitDesignatorEnum["Bldg"] = "BLDG";
    GetAddressesOutputFormatUnitDesignatorEnum["Bsmt"] = "BSMT";
    GetAddressesOutputFormatUnitDesignatorEnum["Flr"] = "FLR";
    GetAddressesOutputFormatUnitDesignatorEnum["Lobby"] = "LOBBY";
    GetAddressesOutputFormatUnitDesignatorEnum["Lwr"] = "LWR";
    GetAddressesOutputFormatUnitDesignatorEnum["Pad"] = "PAD";
    GetAddressesOutputFormatUnitDesignatorEnum["Ph"] = "PH";
    GetAddressesOutputFormatUnitDesignatorEnum["Rear"] = "REAR";
    GetAddressesOutputFormatUnitDesignatorEnum["Rm"] = "RM";
    GetAddressesOutputFormatUnitDesignatorEnum["Side"] = "SIDE";
    GetAddressesOutputFormatUnitDesignatorEnum["Site"] = "SITE";
    GetAddressesOutputFormatUnitDesignatorEnum["Suite"] = "SUITE";
    GetAddressesOutputFormatUnitDesignatorEnum["Th"] = "TH";
    GetAddressesOutputFormatUnitDesignatorEnum["Unit"] = "UNIT";
    GetAddressesOutputFormatUnitDesignatorEnum["Uppr"] = "UPPR";
})(GetAddressesOutputFormatUnitDesignatorEnum || (GetAddressesOutputFormatUnitDesignatorEnum = {}));
var GetAddressesOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetAddressesOutputFormatQueryParams, _super);
    function GetAddressesOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addressString" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "addressString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoComplete" }),
        __metadata("design:type", Boolean)
    ], GetAddressesOutputFormatQueryParams.prototype, "autoComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "bbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" }),
        __metadata("design:type", Boolean)
    ], GetAddressesOutputFormatQueryParams.prototype, "brief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=centre" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "centre", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=civicNumber" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "civicNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=civicNumberSuffix" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "civicNumberSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=echo" }),
        __metadata("design:type", Boolean)
    ], GetAddressesOutputFormatQueryParams.prototype, "echo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extrapolate" }),
        __metadata("design:type", Boolean)
    ], GetAddressesOutputFormatQueryParams.prototype, "extrapolate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interpolation" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "interpolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=localities" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "localities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=localityName" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "localityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "locationDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=matchPrecision" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "matchPrecision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=matchPrecisionNot" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "matchPrecisionNot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" }),
        __metadata("design:type", Number)
    ], GetAddressesOutputFormatQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetAddressesOutputFormatQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minScore" }),
        __metadata("design:type", Number)
    ], GetAddressesOutputFormatQueryParams.prototype, "minScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notLocalities" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "notLocalities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetAddressesOutputFormatQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parcelPoint" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "parcelPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provinceCode" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "provinceCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" }),
        __metadata("design:type", Number)
    ], GetAddressesOutputFormatQueryParams.prototype, "setBack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteName" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "siteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetDirection" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "streetDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetName" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetQualifier" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "streetQualifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetType" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "streetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitDesignator" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "unitDesignator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitNumber" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "unitNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitNumberSuffix" }),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatQueryParams.prototype, "unitNumberSuffix", void 0);
    return GetAddressesOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetAddressesOutputFormatQueryParams };
var GetAddressesOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetAddressesOutputFormatRequest, _super);
    function GetAddressesOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddressesOutputFormatPathParams)
    ], GetAddressesOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddressesOutputFormatQueryParams)
    ], GetAddressesOutputFormatRequest.prototype, "queryParams", void 0);
    return GetAddressesOutputFormatRequest;
}(SpeakeasyBase));
export { GetAddressesOutputFormatRequest };
var GetAddressesOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetAddressesOutputFormatResponse, _super);
    function GetAddressesOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAddressesOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAddressesOutputFormatResponse.prototype, "statusCode", void 0);
    return GetAddressesOutputFormatResponse;
}(SpeakeasyBase));
export { GetAddressesOutputFormatResponse };
