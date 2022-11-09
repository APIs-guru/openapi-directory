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
export var SmsUniqueRequestGmtZoneEnum;
(function (SmsUniqueRequestGmtZoneEnum) {
    SmsUniqueRequestGmtZoneEnum["PacificMidway"] = "Pacific/Midway";
    SmsUniqueRequestGmtZoneEnum["AmericaAdak"] = "America/Adak";
    SmsUniqueRequestGmtZoneEnum["EtcGmtPlus10"] = "Etc/GMT+10";
    SmsUniqueRequestGmtZoneEnum["PacificMarquesas"] = "Pacific/Marquesas";
    SmsUniqueRequestGmtZoneEnum["PacificGambier"] = "Pacific/Gambier";
    SmsUniqueRequestGmtZoneEnum["AmericaAnchorage"] = "America/Anchorage";
    SmsUniqueRequestGmtZoneEnum["AmericaEnsenada"] = "America/Ensenada";
    SmsUniqueRequestGmtZoneEnum["EtcGmtPlus8"] = "Etc/GMT+8";
    SmsUniqueRequestGmtZoneEnum["AmericaLosAngeles"] = "America/Los_Angeles";
    SmsUniqueRequestGmtZoneEnum["AmericaDenver"] = "America/Denver";
    SmsUniqueRequestGmtZoneEnum["AmericaChihuahua"] = "America/Chihuahua";
    SmsUniqueRequestGmtZoneEnum["AmericaDawsonCreek"] = "America/Dawson_Creek";
    SmsUniqueRequestGmtZoneEnum["AmericaBelize"] = "America/Belize";
    SmsUniqueRequestGmtZoneEnum["AmericaCancun"] = "America/Cancun";
    SmsUniqueRequestGmtZoneEnum["ChileEasterIsland"] = "Chile/EasterIsland";
    SmsUniqueRequestGmtZoneEnum["AmericaChicago"] = "America/Chicago";
    SmsUniqueRequestGmtZoneEnum["AmericaNewYork"] = "America/New_York";
    SmsUniqueRequestGmtZoneEnum["AmericaHavana"] = "America/Havana";
    SmsUniqueRequestGmtZoneEnum["AmericaBogota"] = "America/Bogota";
    SmsUniqueRequestGmtZoneEnum["AmericaCaracas"] = "America/Caracas";
    SmsUniqueRequestGmtZoneEnum["AmericaSantiago"] = "America/Santiago";
    SmsUniqueRequestGmtZoneEnum["AmericaLaPaz"] = "America/La_Paz";
    SmsUniqueRequestGmtZoneEnum["AtlanticStanley"] = "Atlantic/Stanley";
    SmsUniqueRequestGmtZoneEnum["AmericaCampoGrande"] = "America/Campo_Grande";
    SmsUniqueRequestGmtZoneEnum["AmericaGooseBay"] = "America/Goose_Bay";
    SmsUniqueRequestGmtZoneEnum["AmericaGlaceBay"] = "America/Glace_Bay";
    SmsUniqueRequestGmtZoneEnum["AmericaStJohns"] = "America/St_Johns";
    SmsUniqueRequestGmtZoneEnum["AmericaAraguaina"] = "America/Araguaina";
    SmsUniqueRequestGmtZoneEnum["AmericaMontevideo"] = "America/Montevideo";
    SmsUniqueRequestGmtZoneEnum["AmericaMiquelon"] = "America/Miquelon";
    SmsUniqueRequestGmtZoneEnum["AmericaGodthab"] = "America/Godthab";
    SmsUniqueRequestGmtZoneEnum["AmericaArgentinaBuenosAires"] = "America/Argentina/Buenos_Aires";
    SmsUniqueRequestGmtZoneEnum["AmericaSaoPaulo"] = "America/Sao_Paulo";
    SmsUniqueRequestGmtZoneEnum["AmericaNoronha"] = "America/Noronha";
    SmsUniqueRequestGmtZoneEnum["AtlanticCapeVerde"] = "Atlantic/Cape_Verde";
    SmsUniqueRequestGmtZoneEnum["AtlanticAzores"] = "Atlantic/Azores";
    SmsUniqueRequestGmtZoneEnum["EuropeBelfast"] = "Europe/Belfast";
    SmsUniqueRequestGmtZoneEnum["EuropeDublin"] = "Europe/Dublin";
    SmsUniqueRequestGmtZoneEnum["EuropeLisbon"] = "Europe/Lisbon";
    SmsUniqueRequestGmtZoneEnum["EuropeLondon"] = "Europe/London";
    SmsUniqueRequestGmtZoneEnum["AfricaAbidjan"] = "Africa/Abidjan";
    SmsUniqueRequestGmtZoneEnum["EuropeAmsterdam"] = "Europe/Amsterdam";
    SmsUniqueRequestGmtZoneEnum["EuropeBelgrade"] = "Europe/Belgrade";
    SmsUniqueRequestGmtZoneEnum["EuropeBrussels"] = "Europe/Brussels";
    SmsUniqueRequestGmtZoneEnum["AfricaAlgiers"] = "Africa/Algiers";
    SmsUniqueRequestGmtZoneEnum["AfricaWindhoek"] = "Africa/Windhoek";
    SmsUniqueRequestGmtZoneEnum["AsiaBeirut"] = "Asia/Beirut";
    SmsUniqueRequestGmtZoneEnum["AfricaCairo"] = "Africa/Cairo";
    SmsUniqueRequestGmtZoneEnum["AsiaGaza"] = "Asia/Gaza";
    SmsUniqueRequestGmtZoneEnum["AfricaBlantyre"] = "Africa/Blantyre";
    SmsUniqueRequestGmtZoneEnum["AsiaJerusalem"] = "Asia/Jerusalem";
    SmsUniqueRequestGmtZoneEnum["EuropeMinsk"] = "Europe/Minsk";
    SmsUniqueRequestGmtZoneEnum["AsiaDamascus"] = "Asia/Damascus";
    SmsUniqueRequestGmtZoneEnum["EuropeMoscow"] = "Europe/Moscow";
    SmsUniqueRequestGmtZoneEnum["AfricaAddisAbaba"] = "Africa/Addis_Ababa";
    SmsUniqueRequestGmtZoneEnum["AsiaTehran"] = "Asia/Tehran";
    SmsUniqueRequestGmtZoneEnum["AsiaDubai"] = "Asia/Dubai";
    SmsUniqueRequestGmtZoneEnum["AsiaYerevan"] = "Asia/Yerevan";
    SmsUniqueRequestGmtZoneEnum["AsiaKabul"] = "Asia/Kabul";
    SmsUniqueRequestGmtZoneEnum["AsiaYekaterinburg"] = "Asia/Yekaterinburg";
    SmsUniqueRequestGmtZoneEnum["AsiaTashkent"] = "Asia/Tashkent";
    SmsUniqueRequestGmtZoneEnum["AsiaKolkata"] = "Asia/Kolkata";
    SmsUniqueRequestGmtZoneEnum["AsiaKatmandu"] = "Asia/Katmandu";
    SmsUniqueRequestGmtZoneEnum["AsiaDhaka"] = "Asia/Dhaka";
    SmsUniqueRequestGmtZoneEnum["AsiaNovosibirsk"] = "Asia/Novosibirsk";
    SmsUniqueRequestGmtZoneEnum["AsiaRangoon"] = "Asia/Rangoon";
    SmsUniqueRequestGmtZoneEnum["AsiaBangkok"] = "Asia/Bangkok";
    SmsUniqueRequestGmtZoneEnum["AsiaKrasnoyarsk"] = "Asia/Krasnoyarsk";
    SmsUniqueRequestGmtZoneEnum["AsiaHongKong"] = "Asia/Hong_Kong";
    SmsUniqueRequestGmtZoneEnum["AsiaIrkutsk"] = "Asia/Irkutsk";
    SmsUniqueRequestGmtZoneEnum["AustraliaPerth"] = "Australia/Perth";
    SmsUniqueRequestGmtZoneEnum["AustraliaEucla"] = "Australia/Eucla";
    SmsUniqueRequestGmtZoneEnum["AsiaTokyo"] = "Asia/Tokyo";
    SmsUniqueRequestGmtZoneEnum["AsiaSeoul"] = "Asia/Seoul";
    SmsUniqueRequestGmtZoneEnum["AsiaYakutsk"] = "Asia/Yakutsk";
    SmsUniqueRequestGmtZoneEnum["AustraliaAdelaide"] = "Australia/Adelaide";
    SmsUniqueRequestGmtZoneEnum["AustraliaDarwin"] = "Australia/Darwin";
    SmsUniqueRequestGmtZoneEnum["AustraliaBrisbane"] = "Australia/Brisbane";
    SmsUniqueRequestGmtZoneEnum["AustraliaHobart"] = "Australia/Hobart";
    SmsUniqueRequestGmtZoneEnum["AsiaVladivostok"] = "Asia/Vladivostok";
    SmsUniqueRequestGmtZoneEnum["AustraliaLordHowe"] = "Australia/Lord_Howe";
    SmsUniqueRequestGmtZoneEnum["EtcGmt11"] = "Etc/GMT-11";
    SmsUniqueRequestGmtZoneEnum["AsiaMagadan"] = "Asia/Magadan";
    SmsUniqueRequestGmtZoneEnum["PacificNorfolk"] = "Pacific/Norfolk";
    SmsUniqueRequestGmtZoneEnum["AsiaAnadyr"] = "Asia/Anadyr";
    SmsUniqueRequestGmtZoneEnum["PacificAuckland"] = "Pacific/Auckland";
    SmsUniqueRequestGmtZoneEnum["EtcGmt12"] = "Etc/GMT-12";
    SmsUniqueRequestGmtZoneEnum["PacificChatham"] = "Pacific/Chatham";
    SmsUniqueRequestGmtZoneEnum["PacificTongatapu"] = "Pacific/Tongatapu";
    SmsUniqueRequestGmtZoneEnum["PacificKiritimati"] = "Pacific/Kiritimati";
})(SmsUniqueRequestGmtZoneEnum || (SmsUniqueRequestGmtZoneEnum = {}));
export var SmsUniqueRequestNumAzurEnum;
(function (SmsUniqueRequestNumAzurEnum) {
    SmsUniqueRequestNumAzurEnum["One"] = "1";
})(SmsUniqueRequestNumAzurEnum || (SmsUniqueRequestNumAzurEnum = {}));
var SmsUniqueRequest = /** @class */ (function (_super) {
    __extends(SmsUniqueRequest, _super);
    function SmsUniqueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=date_envoi" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "dateEnvoi", void 0);
    __decorate([
        Metadata({ data: "json, name=emetteur" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "emetteur", void 0);
    __decorate([
        Metadata({ data: "json, name=gmt_zone" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "gmtZone", void 0);
    __decorate([
        Metadata({ data: "json, name=keyid" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "keyid", void 0);
    __decorate([
        Metadata({ data: "json, name=nostop" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "nostop", void 0);
    __decorate([
        Metadata({ data: "json, name=num" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "num", void 0);
    __decorate([
        Metadata({ data: "json, name=numAzur" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "numAzur", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=smslong" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "smslong", void 0);
    __decorate([
        Metadata({ data: "json, name=tracker" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "tracker", void 0);
    __decorate([
        Metadata({ data: "json, name=ucs2" }),
        __metadata("design:type", String)
    ], SmsUniqueRequest.prototype, "ucs2", void 0);
    return SmsUniqueRequest;
}(SpeakeasyBase));
export { SmsUniqueRequest };
