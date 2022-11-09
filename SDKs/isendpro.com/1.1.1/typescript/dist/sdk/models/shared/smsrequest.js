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
export var SmsRequestGmtZoneEnum;
(function (SmsRequestGmtZoneEnum) {
    SmsRequestGmtZoneEnum["PacificMidway"] = "Pacific/Midway";
    SmsRequestGmtZoneEnum["AmericaAdak"] = "America/Adak";
    SmsRequestGmtZoneEnum["EtcGmtPlus10"] = "Etc/GMT+10";
    SmsRequestGmtZoneEnum["PacificMarquesas"] = "Pacific/Marquesas";
    SmsRequestGmtZoneEnum["PacificGambier"] = "Pacific/Gambier";
    SmsRequestGmtZoneEnum["AmericaAnchorage"] = "America/Anchorage";
    SmsRequestGmtZoneEnum["AmericaEnsenada"] = "America/Ensenada";
    SmsRequestGmtZoneEnum["EtcGmtPlus8"] = "Etc/GMT+8";
    SmsRequestGmtZoneEnum["AmericaLosAngeles"] = "America/Los_Angeles";
    SmsRequestGmtZoneEnum["AmericaDenver"] = "America/Denver";
    SmsRequestGmtZoneEnum["AmericaChihuahua"] = "America/Chihuahua";
    SmsRequestGmtZoneEnum["AmericaDawsonCreek"] = "America/Dawson_Creek";
    SmsRequestGmtZoneEnum["AmericaBelize"] = "America/Belize";
    SmsRequestGmtZoneEnum["AmericaCancun"] = "America/Cancun";
    SmsRequestGmtZoneEnum["ChileEasterIsland"] = "Chile/EasterIsland";
    SmsRequestGmtZoneEnum["AmericaChicago"] = "America/Chicago";
    SmsRequestGmtZoneEnum["AmericaNewYork"] = "America/New_York";
    SmsRequestGmtZoneEnum["AmericaHavana"] = "America/Havana";
    SmsRequestGmtZoneEnum["AmericaBogota"] = "America/Bogota";
    SmsRequestGmtZoneEnum["AmericaCaracas"] = "America/Caracas";
    SmsRequestGmtZoneEnum["AmericaSantiago"] = "America/Santiago";
    SmsRequestGmtZoneEnum["AmericaLaPaz"] = "America/La_Paz";
    SmsRequestGmtZoneEnum["AtlanticStanley"] = "Atlantic/Stanley";
    SmsRequestGmtZoneEnum["AmericaCampoGrande"] = "America/Campo_Grande";
    SmsRequestGmtZoneEnum["AmericaGooseBay"] = "America/Goose_Bay";
    SmsRequestGmtZoneEnum["AmericaGlaceBay"] = "America/Glace_Bay";
    SmsRequestGmtZoneEnum["AmericaStJohns"] = "America/St_Johns";
    SmsRequestGmtZoneEnum["AmericaAraguaina"] = "America/Araguaina";
    SmsRequestGmtZoneEnum["AmericaMontevideo"] = "America/Montevideo";
    SmsRequestGmtZoneEnum["AmericaMiquelon"] = "America/Miquelon";
    SmsRequestGmtZoneEnum["AmericaGodthab"] = "America/Godthab";
    SmsRequestGmtZoneEnum["AmericaArgentinaBuenosAires"] = "America/Argentina/Buenos_Aires";
    SmsRequestGmtZoneEnum["AmericaSaoPaulo"] = "America/Sao_Paulo";
    SmsRequestGmtZoneEnum["AmericaNoronha"] = "America/Noronha";
    SmsRequestGmtZoneEnum["AtlanticCapeVerde"] = "Atlantic/Cape_Verde";
    SmsRequestGmtZoneEnum["AtlanticAzores"] = "Atlantic/Azores";
    SmsRequestGmtZoneEnum["EuropeBelfast"] = "Europe/Belfast";
    SmsRequestGmtZoneEnum["EuropeDublin"] = "Europe/Dublin";
    SmsRequestGmtZoneEnum["EuropeLisbon"] = "Europe/Lisbon";
    SmsRequestGmtZoneEnum["EuropeLondon"] = "Europe/London";
    SmsRequestGmtZoneEnum["AfricaAbidjan"] = "Africa/Abidjan";
    SmsRequestGmtZoneEnum["EuropeAmsterdam"] = "Europe/Amsterdam";
    SmsRequestGmtZoneEnum["EuropeBelgrade"] = "Europe/Belgrade";
    SmsRequestGmtZoneEnum["EuropeBrussels"] = "Europe/Brussels";
    SmsRequestGmtZoneEnum["AfricaAlgiers"] = "Africa/Algiers";
    SmsRequestGmtZoneEnum["AfricaWindhoek"] = "Africa/Windhoek";
    SmsRequestGmtZoneEnum["AsiaBeirut"] = "Asia/Beirut";
    SmsRequestGmtZoneEnum["AfricaCairo"] = "Africa/Cairo";
    SmsRequestGmtZoneEnum["AsiaGaza"] = "Asia/Gaza";
    SmsRequestGmtZoneEnum["AfricaBlantyre"] = "Africa/Blantyre";
    SmsRequestGmtZoneEnum["AsiaJerusalem"] = "Asia/Jerusalem";
    SmsRequestGmtZoneEnum["EuropeMinsk"] = "Europe/Minsk";
    SmsRequestGmtZoneEnum["AsiaDamascus"] = "Asia/Damascus";
    SmsRequestGmtZoneEnum["EuropeMoscow"] = "Europe/Moscow";
    SmsRequestGmtZoneEnum["AfricaAddisAbaba"] = "Africa/Addis_Ababa";
    SmsRequestGmtZoneEnum["AsiaTehran"] = "Asia/Tehran";
    SmsRequestGmtZoneEnum["AsiaDubai"] = "Asia/Dubai";
    SmsRequestGmtZoneEnum["AsiaYerevan"] = "Asia/Yerevan";
    SmsRequestGmtZoneEnum["AsiaKabul"] = "Asia/Kabul";
    SmsRequestGmtZoneEnum["AsiaYekaterinburg"] = "Asia/Yekaterinburg";
    SmsRequestGmtZoneEnum["AsiaTashkent"] = "Asia/Tashkent";
    SmsRequestGmtZoneEnum["AsiaKolkata"] = "Asia/Kolkata";
    SmsRequestGmtZoneEnum["AsiaKatmandu"] = "Asia/Katmandu";
    SmsRequestGmtZoneEnum["AsiaDhaka"] = "Asia/Dhaka";
    SmsRequestGmtZoneEnum["AsiaNovosibirsk"] = "Asia/Novosibirsk";
    SmsRequestGmtZoneEnum["AsiaRangoon"] = "Asia/Rangoon";
    SmsRequestGmtZoneEnum["AsiaBangkok"] = "Asia/Bangkok";
    SmsRequestGmtZoneEnum["AsiaKrasnoyarsk"] = "Asia/Krasnoyarsk";
    SmsRequestGmtZoneEnum["AsiaHongKong"] = "Asia/Hong_Kong";
    SmsRequestGmtZoneEnum["AsiaIrkutsk"] = "Asia/Irkutsk";
    SmsRequestGmtZoneEnum["AustraliaPerth"] = "Australia/Perth";
    SmsRequestGmtZoneEnum["AustraliaEucla"] = "Australia/Eucla";
    SmsRequestGmtZoneEnum["AsiaTokyo"] = "Asia/Tokyo";
    SmsRequestGmtZoneEnum["AsiaSeoul"] = "Asia/Seoul";
    SmsRequestGmtZoneEnum["AsiaYakutsk"] = "Asia/Yakutsk";
    SmsRequestGmtZoneEnum["AustraliaAdelaide"] = "Australia/Adelaide";
    SmsRequestGmtZoneEnum["AustraliaDarwin"] = "Australia/Darwin";
    SmsRequestGmtZoneEnum["AustraliaBrisbane"] = "Australia/Brisbane";
    SmsRequestGmtZoneEnum["AustraliaHobart"] = "Australia/Hobart";
    SmsRequestGmtZoneEnum["AsiaVladivostok"] = "Asia/Vladivostok";
    SmsRequestGmtZoneEnum["AustraliaLordHowe"] = "Australia/Lord_Howe";
    SmsRequestGmtZoneEnum["EtcGmt11"] = "Etc/GMT-11";
    SmsRequestGmtZoneEnum["AsiaMagadan"] = "Asia/Magadan";
    SmsRequestGmtZoneEnum["PacificNorfolk"] = "Pacific/Norfolk";
    SmsRequestGmtZoneEnum["AsiaAnadyr"] = "Asia/Anadyr";
    SmsRequestGmtZoneEnum["PacificAuckland"] = "Pacific/Auckland";
    SmsRequestGmtZoneEnum["EtcGmt12"] = "Etc/GMT-12";
    SmsRequestGmtZoneEnum["PacificChatham"] = "Pacific/Chatham";
    SmsRequestGmtZoneEnum["PacificTongatapu"] = "Pacific/Tongatapu";
    SmsRequestGmtZoneEnum["PacificKiritimati"] = "Pacific/Kiritimati";
})(SmsRequestGmtZoneEnum || (SmsRequestGmtZoneEnum = {}));
export var SmsRequestNumAzurEnum;
(function (SmsRequestNumAzurEnum) {
    SmsRequestNumAzurEnum["One"] = "1";
})(SmsRequestNumAzurEnum || (SmsRequestNumAzurEnum = {}));
var SmsRequest = /** @class */ (function (_super) {
    __extends(SmsRequest, _super);
    function SmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=date_envoi" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "dateEnvoi", void 0);
    __decorate([
        Metadata({ data: "json, name=emetteur" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "emetteur", void 0);
    __decorate([
        Metadata({ data: "json, name=gmt_zone" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "gmtZone", void 0);
    __decorate([
        Metadata({ data: "json, name=keyid" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "keyid", void 0);
    __decorate([
        Metadata({ data: "json, name=nostop" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "nostop", void 0);
    __decorate([
        Metadata({ data: "json, name=num" }),
        __metadata("design:type", Array)
    ], SmsRequest.prototype, "num", void 0);
    __decorate([
        Metadata({ data: "json, name=numAzur" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "numAzur", void 0);
    __decorate([
        Metadata({ data: "json, name=repertoireId" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "repertoireId", void 0);
    __decorate([
        Metadata({ data: "json, name=sms" }),
        __metadata("design:type", Array)
    ], SmsRequest.prototype, "sms", void 0);
    __decorate([
        Metadata({ data: "json, name=smslong" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "smslong", void 0);
    __decorate([
        Metadata({ data: "json, name=tracker" }),
        __metadata("design:type", Array)
    ], SmsRequest.prototype, "tracker", void 0);
    __decorate([
        Metadata({ data: "json, name=ucs2" }),
        __metadata("design:type", String)
    ], SmsRequest.prototype, "ucs2", void 0);
    return SmsRequest;
}(SpeakeasyBase));
export { SmsRequest };
