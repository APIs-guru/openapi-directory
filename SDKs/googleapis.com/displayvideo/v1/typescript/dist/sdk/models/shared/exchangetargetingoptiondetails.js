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
export var ExchangeTargetingOptionDetailsExchangeEnum;
(function (ExchangeTargetingOptionDetailsExchangeEnum) {
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeUnspecified"] = "EXCHANGE_UNSPECIFIED";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeGoogleAdManager"] = "EXCHANGE_GOOGLE_AD_MANAGER";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAppnexus"] = "EXCHANGE_APPNEXUS";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeBrightroll"] = "EXCHANGE_BRIGHTROLL";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAdform"] = "EXCHANGE_ADFORM";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAdmeta"] = "EXCHANGE_ADMETA";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAdmixer"] = "EXCHANGE_ADMIXER";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAdsmogo"] = "EXCHANGE_ADSMOGO";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAdswizz"] = "EXCHANGE_ADSWIZZ";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeBidswitch"] = "EXCHANGE_BIDSWITCH";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeBrightrollDisplay"] = "EXCHANGE_BRIGHTROLL_DISPLAY";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeCadreon"] = "EXCHANGE_CADREON";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeDailymotion"] = "EXCHANGE_DAILYMOTION";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeFive"] = "EXCHANGE_FIVE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeFluct"] = "EXCHANGE_FLUCT";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeFreewheel"] = "EXCHANGE_FREEWHEEL";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeGeniee"] = "EXCHANGE_GENIEE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeGumgum"] = "EXCHANGE_GUMGUM";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeImobile"] = "EXCHANGE_IMOBILE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeIbillboard"] = "EXCHANGE_IBILLBOARD";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeImproveDigital"] = "EXCHANGE_IMPROVE_DIGITAL";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeIndex"] = "EXCHANGE_INDEX";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeKargo"] = "EXCHANGE_KARGO";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeMicroad"] = "EXCHANGE_MICROAD";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeMopub"] = "EXCHANGE_MOPUB";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeNend"] = "EXCHANGE_NEND";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeOneByAolDisplay"] = "EXCHANGE_ONE_BY_AOL_DISPLAY";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeOneByAolMobile"] = "EXCHANGE_ONE_BY_AOL_MOBILE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeOneByAolVideo"] = "EXCHANGE_ONE_BY_AOL_VIDEO";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeOoyala"] = "EXCHANGE_OOYALA";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeOpenx"] = "EXCHANGE_OPENX";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangePermodo"] = "EXCHANGE_PERMODO";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangePlatformone"] = "EXCHANGE_PLATFORMONE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangePlatformid"] = "EXCHANGE_PLATFORMID";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangePubmatic"] = "EXCHANGE_PUBMATIC";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangePulsepoint"] = "EXCHANGE_PULSEPOINT";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeRevenuemax"] = "EXCHANGE_REVENUEMAX";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeRubicon"] = "EXCHANGE_RUBICON";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSmartclip"] = "EXCHANGE_SMARTCLIP";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSmartrtb"] = "EXCHANGE_SMARTRTB";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSmartstreamtv"] = "EXCHANGE_SMARTSTREAMTV";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSovrn"] = "EXCHANGE_SOVRN";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSpotxchange"] = "EXCHANGE_SPOTXCHANGE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeStroer"] = "EXCHANGE_STROER";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTeadstv"] = "EXCHANGE_TEADSTV";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTelaria"] = "EXCHANGE_TELARIA";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTvn"] = "EXCHANGE_TVN";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeUnited"] = "EXCHANGE_UNITED";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeYieldlab"] = "EXCHANGE_YIELDLAB";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeYieldmo"] = "EXCHANGE_YIELDMO";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeUnrulyx"] = "EXCHANGE_UNRULYX";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeOpen8"] = "EXCHANGE_OPEN8";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTriton"] = "EXCHANGE_TRITON";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTriplelift"] = "EXCHANGE_TRIPLELIFT";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTaboola"] = "EXCHANGE_TABOOLA";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeInmobi"] = "EXCHANGE_INMOBI";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSmaato"] = "EXCHANGE_SMAATO";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeAja"] = "EXCHANGE_AJA";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSupership"] = "EXCHANGE_SUPERSHIP";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeNexstarDigital"] = "EXCHANGE_NEXSTAR_DIGITAL";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeWaze"] = "EXCHANGE_WAZE";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSoundcast"] = "EXCHANGE_SOUNDCAST";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeSharethrough"] = "EXCHANGE_SHARETHROUGH";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeFyber"] = "EXCHANGE_FYBER";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeRedForPublishers"] = "EXCHANGE_RED_FOR_PUBLISHERS";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeMedianet"] = "EXCHANGE_MEDIANET";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeTapjoy"] = "EXCHANGE_TAPJOY";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeVistar"] = "EXCHANGE_VISTAR";
    ExchangeTargetingOptionDetailsExchangeEnum["ExchangeDax"] = "EXCHANGE_DAX";
})(ExchangeTargetingOptionDetailsExchangeEnum || (ExchangeTargetingOptionDetailsExchangeEnum = {}));
// ExchangeTargetingOptionDetails
/**
 * Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
**/
var ExchangeTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ExchangeTargetingOptionDetails, _super);
    function ExchangeTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], ExchangeTargetingOptionDetails.prototype, "exchange", void 0);
    return ExchangeTargetingOptionDetails;
}(SpeakeasyBase));
export { ExchangeTargetingOptionDetails };
