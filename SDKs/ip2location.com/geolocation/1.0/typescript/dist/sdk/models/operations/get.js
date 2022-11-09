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
export var GetAddonEnum;
(function (GetAddonEnum) {
    GetAddonEnum["Continent"] = "continent";
    GetAddonEnum["Country"] = "country";
    GetAddonEnum["Region"] = "region";
    GetAddonEnum["City"] = "city";
    GetAddonEnum["Geotargeting"] = "geotargeting";
    GetAddonEnum["CountryGroupings"] = "country_groupings";
    GetAddonEnum["TimeZoneInfo"] = "time_zone_info";
})(GetAddonEnum || (GetAddonEnum = {}));
export var GetFormatEnum;
(function (GetFormatEnum) {
    GetFormatEnum["Json"] = "json";
    GetFormatEnum["Xml"] = "xml";
})(GetFormatEnum || (GetFormatEnum = {}));
export var GetLangEnum;
(function (GetLangEnum) {
    GetLangEnum["Ar"] = "ar";
    GetLangEnum["Cs"] = "cs";
    GetLangEnum["Da"] = "da";
    GetLangEnum["De"] = "de";
    GetLangEnum["En"] = "en";
    GetLangEnum["Es"] = "es";
    GetLangEnum["Et"] = "et";
    GetLangEnum["Fi"] = "fi";
    GetLangEnum["Fr"] = "fr";
    GetLangEnum["Ga"] = "ga";
    GetLangEnum["It"] = "it";
    GetLangEnum["Ja"] = "ja";
    GetLangEnum["Ko"] = "ko";
    GetLangEnum["Ms"] = "ms";
    GetLangEnum["Nl"] = "nl";
    GetLangEnum["Pt"] = "pt";
    GetLangEnum["Ru"] = "ru";
    GetLangEnum["Sv"] = "sv";
    GetLangEnum["Tr"] = "tr";
    GetLangEnum["Vi"] = "vi";
    GetLangEnum["ZhCn"] = "zh-cn";
    GetLangEnum["ZhTw"] = "zh-tw";
})(GetLangEnum || (GetLangEnum = {}));
export var GetPackageEnum;
(function (GetPackageEnum) {
    GetPackageEnum["Ws1"] = "WS1";
    GetPackageEnum["Ws2"] = "WS2";
    GetPackageEnum["Ws3"] = "WS3";
    GetPackageEnum["Ws4"] = "WS4";
    GetPackageEnum["Ws5"] = "WS5";
    GetPackageEnum["Ws6"] = "WS6";
    GetPackageEnum["Ws7"] = "WS7";
    GetPackageEnum["Ws8"] = "WS8";
    GetPackageEnum["Ws9"] = "WS9";
    GetPackageEnum["Ws10"] = "WS10";
    GetPackageEnum["Ws11"] = "WS11";
    GetPackageEnum["Ws12"] = "WS12";
    GetPackageEnum["Ws13"] = "WS13";
    GetPackageEnum["Ws14"] = "WS14";
    GetPackageEnum["Ws15"] = "WS15";
    GetPackageEnum["Ws16"] = "WS16";
    GetPackageEnum["Ws17"] = "WS17";
    GetPackageEnum["Ws18"] = "WS18";
    GetPackageEnum["Ws19"] = "WS19";
    GetPackageEnum["Ws20"] = "WS20";
    GetPackageEnum["Ws21"] = "WS21";
    GetPackageEnum["Ws22"] = "WS22";
    GetPackageEnum["Ws23"] = "WS23";
    GetPackageEnum["Ws24"] = "WS24";
    GetPackageEnum["Ws25"] = "WS25";
})(GetPackageEnum || (GetPackageEnum = {}));
var GetQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryParams, _super);
    function GetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=addon" }),
        __metadata("design:type", Array)
    ], GetQueryParams.prototype, "addon", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "ip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "lang", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=package" }),
        __metadata("design:type", String)
    ], GetQueryParams.prototype, "package", void 0);
    return GetQueryParams;
}(SpeakeasyBase));
export { GetQueryParams };
var GetRequest = /** @class */ (function (_super) {
    __extends(GetRequest, _super);
    function GetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetQueryParams)
    ], GetRequest.prototype, "queryParams", void 0);
    return GetRequest;
}(SpeakeasyBase));
export { GetRequest };
var GetResponse = /** @class */ (function (_super) {
    __extends(GetResponse, _super);
    function GetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResponse.prototype, "get200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResponse.prototype, "statusCode", void 0);
    return GetResponse;
}(SpeakeasyBase));
export { GetResponse };
