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
export var ExchangeAssignedTargetingOptionDetailsExchangeEnum;
(function (ExchangeAssignedTargetingOptionDetailsExchangeEnum) {
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeUnspecified"] = "EXCHANGE_UNSPECIFIED";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeGoogleAdManager"] = "EXCHANGE_GOOGLE_AD_MANAGER";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAppnexus"] = "EXCHANGE_APPNEXUS";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeBrightroll"] = "EXCHANGE_BRIGHTROLL";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAdform"] = "EXCHANGE_ADFORM";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAdmeta"] = "EXCHANGE_ADMETA";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAdmixer"] = "EXCHANGE_ADMIXER";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAdsmogo"] = "EXCHANGE_ADSMOGO";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAdswizz"] = "EXCHANGE_ADSWIZZ";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeBidswitch"] = "EXCHANGE_BIDSWITCH";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeBrightrollDisplay"] = "EXCHANGE_BRIGHTROLL_DISPLAY";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeCadreon"] = "EXCHANGE_CADREON";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeDailymotion"] = "EXCHANGE_DAILYMOTION";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeFive"] = "EXCHANGE_FIVE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeFluct"] = "EXCHANGE_FLUCT";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeFreewheel"] = "EXCHANGE_FREEWHEEL";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeGeniee"] = "EXCHANGE_GENIEE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeGumgum"] = "EXCHANGE_GUMGUM";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeImobile"] = "EXCHANGE_IMOBILE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeIbillboard"] = "EXCHANGE_IBILLBOARD";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeImproveDigital"] = "EXCHANGE_IMPROVE_DIGITAL";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeIndex"] = "EXCHANGE_INDEX";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeKargo"] = "EXCHANGE_KARGO";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeMicroad"] = "EXCHANGE_MICROAD";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeMopub"] = "EXCHANGE_MOPUB";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeNend"] = "EXCHANGE_NEND";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeOneByAolDisplay"] = "EXCHANGE_ONE_BY_AOL_DISPLAY";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeOneByAolMobile"] = "EXCHANGE_ONE_BY_AOL_MOBILE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeOneByAolVideo"] = "EXCHANGE_ONE_BY_AOL_VIDEO";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeOoyala"] = "EXCHANGE_OOYALA";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeOpenx"] = "EXCHANGE_OPENX";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangePermodo"] = "EXCHANGE_PERMODO";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangePlatformone"] = "EXCHANGE_PLATFORMONE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangePlatformid"] = "EXCHANGE_PLATFORMID";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangePubmatic"] = "EXCHANGE_PUBMATIC";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangePulsepoint"] = "EXCHANGE_PULSEPOINT";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeRevenuemax"] = "EXCHANGE_REVENUEMAX";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeRubicon"] = "EXCHANGE_RUBICON";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSmartclip"] = "EXCHANGE_SMARTCLIP";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSmartrtb"] = "EXCHANGE_SMARTRTB";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSmartstreamtv"] = "EXCHANGE_SMARTSTREAMTV";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSovrn"] = "EXCHANGE_SOVRN";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSpotxchange"] = "EXCHANGE_SPOTXCHANGE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeStroer"] = "EXCHANGE_STROER";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTeadstv"] = "EXCHANGE_TEADSTV";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTelaria"] = "EXCHANGE_TELARIA";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTvn"] = "EXCHANGE_TVN";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeUnited"] = "EXCHANGE_UNITED";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeYieldlab"] = "EXCHANGE_YIELDLAB";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeYieldmo"] = "EXCHANGE_YIELDMO";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeUnrulyx"] = "EXCHANGE_UNRULYX";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeOpen8"] = "EXCHANGE_OPEN8";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTriton"] = "EXCHANGE_TRITON";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTriplelift"] = "EXCHANGE_TRIPLELIFT";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTaboola"] = "EXCHANGE_TABOOLA";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeInmobi"] = "EXCHANGE_INMOBI";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSmaato"] = "EXCHANGE_SMAATO";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeAja"] = "EXCHANGE_AJA";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSupership"] = "EXCHANGE_SUPERSHIP";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeNexstarDigital"] = "EXCHANGE_NEXSTAR_DIGITAL";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeWaze"] = "EXCHANGE_WAZE";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSoundcast"] = "EXCHANGE_SOUNDCAST";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeSharethrough"] = "EXCHANGE_SHARETHROUGH";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeFyber"] = "EXCHANGE_FYBER";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeRedForPublishers"] = "EXCHANGE_RED_FOR_PUBLISHERS";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeMedianet"] = "EXCHANGE_MEDIANET";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeTapjoy"] = "EXCHANGE_TAPJOY";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeVistar"] = "EXCHANGE_VISTAR";
    ExchangeAssignedTargetingOptionDetailsExchangeEnum["ExchangeDax"] = "EXCHANGE_DAX";
})(ExchangeAssignedTargetingOptionDetailsExchangeEnum || (ExchangeAssignedTargetingOptionDetailsExchangeEnum = {}));
// ExchangeAssignedTargetingOptionDetails
/**
 * Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
**/
var ExchangeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ExchangeAssignedTargetingOptionDetails, _super);
    function ExchangeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], ExchangeAssignedTargetingOptionDetails.prototype, "exchange", void 0);
    return ExchangeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { ExchangeAssignedTargetingOptionDetails };
