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
export var ExchangeConfigEnabledExchangeExchangeEnum;
(function (ExchangeConfigEnabledExchangeExchangeEnum) {
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeUnspecified"] = "EXCHANGE_UNSPECIFIED";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeGoogleAdManager"] = "EXCHANGE_GOOGLE_AD_MANAGER";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAppnexus"] = "EXCHANGE_APPNEXUS";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeBrightroll"] = "EXCHANGE_BRIGHTROLL";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAdform"] = "EXCHANGE_ADFORM";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAdmeta"] = "EXCHANGE_ADMETA";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAdmixer"] = "EXCHANGE_ADMIXER";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAdsmogo"] = "EXCHANGE_ADSMOGO";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAdswizz"] = "EXCHANGE_ADSWIZZ";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeBidswitch"] = "EXCHANGE_BIDSWITCH";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeBrightrollDisplay"] = "EXCHANGE_BRIGHTROLL_DISPLAY";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeCadreon"] = "EXCHANGE_CADREON";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeDailymotion"] = "EXCHANGE_DAILYMOTION";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeFive"] = "EXCHANGE_FIVE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeFluct"] = "EXCHANGE_FLUCT";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeFreewheel"] = "EXCHANGE_FREEWHEEL";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeGeniee"] = "EXCHANGE_GENIEE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeGumgum"] = "EXCHANGE_GUMGUM";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeImobile"] = "EXCHANGE_IMOBILE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeIbillboard"] = "EXCHANGE_IBILLBOARD";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeImproveDigital"] = "EXCHANGE_IMPROVE_DIGITAL";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeIndex"] = "EXCHANGE_INDEX";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeKargo"] = "EXCHANGE_KARGO";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeMicroad"] = "EXCHANGE_MICROAD";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeMopub"] = "EXCHANGE_MOPUB";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeNend"] = "EXCHANGE_NEND";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeOneByAolDisplay"] = "EXCHANGE_ONE_BY_AOL_DISPLAY";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeOneByAolMobile"] = "EXCHANGE_ONE_BY_AOL_MOBILE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeOneByAolVideo"] = "EXCHANGE_ONE_BY_AOL_VIDEO";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeOoyala"] = "EXCHANGE_OOYALA";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeOpenx"] = "EXCHANGE_OPENX";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangePermodo"] = "EXCHANGE_PERMODO";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangePlatformone"] = "EXCHANGE_PLATFORMONE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangePlatformid"] = "EXCHANGE_PLATFORMID";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangePubmatic"] = "EXCHANGE_PUBMATIC";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangePulsepoint"] = "EXCHANGE_PULSEPOINT";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeRevenuemax"] = "EXCHANGE_REVENUEMAX";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeRubicon"] = "EXCHANGE_RUBICON";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSmartclip"] = "EXCHANGE_SMARTCLIP";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSmartrtb"] = "EXCHANGE_SMARTRTB";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSmartstreamtv"] = "EXCHANGE_SMARTSTREAMTV";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSovrn"] = "EXCHANGE_SOVRN";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSpotxchange"] = "EXCHANGE_SPOTXCHANGE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeStroer"] = "EXCHANGE_STROER";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTeadstv"] = "EXCHANGE_TEADSTV";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTelaria"] = "EXCHANGE_TELARIA";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTvn"] = "EXCHANGE_TVN";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeUnited"] = "EXCHANGE_UNITED";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeYieldlab"] = "EXCHANGE_YIELDLAB";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeYieldmo"] = "EXCHANGE_YIELDMO";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeUnrulyx"] = "EXCHANGE_UNRULYX";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeOpen8"] = "EXCHANGE_OPEN8";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTriton"] = "EXCHANGE_TRITON";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTriplelift"] = "EXCHANGE_TRIPLELIFT";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTaboola"] = "EXCHANGE_TABOOLA";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeInmobi"] = "EXCHANGE_INMOBI";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSmaato"] = "EXCHANGE_SMAATO";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeAja"] = "EXCHANGE_AJA";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSupership"] = "EXCHANGE_SUPERSHIP";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeNexstarDigital"] = "EXCHANGE_NEXSTAR_DIGITAL";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeWaze"] = "EXCHANGE_WAZE";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSoundcast"] = "EXCHANGE_SOUNDCAST";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeSharethrough"] = "EXCHANGE_SHARETHROUGH";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeFyber"] = "EXCHANGE_FYBER";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeRedForPublishers"] = "EXCHANGE_RED_FOR_PUBLISHERS";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeMedianet"] = "EXCHANGE_MEDIANET";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeTapjoy"] = "EXCHANGE_TAPJOY";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeVistar"] = "EXCHANGE_VISTAR";
    ExchangeConfigEnabledExchangeExchangeEnum["ExchangeDax"] = "EXCHANGE_DAX";
})(ExchangeConfigEnabledExchangeExchangeEnum || (ExchangeConfigEnabledExchangeExchangeEnum = {}));
// ExchangeConfigEnabledExchange
/**
 * An enabled exchange in the partner.
**/
var ExchangeConfigEnabledExchange = /** @class */ (function (_super) {
    __extends(ExchangeConfigEnabledExchange, _super);
    function ExchangeConfigEnabledExchange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], ExchangeConfigEnabledExchange.prototype, "exchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleAdManagerAgencyId" }),
        __metadata("design:type", String)
    ], ExchangeConfigEnabledExchange.prototype, "googleAdManagerAgencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleAdManagerBuyerNetworkId" }),
        __metadata("design:type", String)
    ], ExchangeConfigEnabledExchange.prototype, "googleAdManagerBuyerNetworkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seatId" }),
        __metadata("design:type", String)
    ], ExchangeConfigEnabledExchange.prototype, "seatId", void 0);
    return ExchangeConfigEnabledExchange;
}(SpeakeasyBase));
export { ExchangeConfigEnabledExchange };
