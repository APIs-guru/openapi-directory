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
export var ExchangeReviewStatusExchangeEnum;
(function (ExchangeReviewStatusExchangeEnum) {
    ExchangeReviewStatusExchangeEnum["ExchangeUnspecified"] = "EXCHANGE_UNSPECIFIED";
    ExchangeReviewStatusExchangeEnum["ExchangeGoogleAdManager"] = "EXCHANGE_GOOGLE_AD_MANAGER";
    ExchangeReviewStatusExchangeEnum["ExchangeAppnexus"] = "EXCHANGE_APPNEXUS";
    ExchangeReviewStatusExchangeEnum["ExchangeBrightroll"] = "EXCHANGE_BRIGHTROLL";
    ExchangeReviewStatusExchangeEnum["ExchangeAdform"] = "EXCHANGE_ADFORM";
    ExchangeReviewStatusExchangeEnum["ExchangeAdmeta"] = "EXCHANGE_ADMETA";
    ExchangeReviewStatusExchangeEnum["ExchangeAdmixer"] = "EXCHANGE_ADMIXER";
    ExchangeReviewStatusExchangeEnum["ExchangeAdsmogo"] = "EXCHANGE_ADSMOGO";
    ExchangeReviewStatusExchangeEnum["ExchangeAdswizz"] = "EXCHANGE_ADSWIZZ";
    ExchangeReviewStatusExchangeEnum["ExchangeBidswitch"] = "EXCHANGE_BIDSWITCH";
    ExchangeReviewStatusExchangeEnum["ExchangeBrightrollDisplay"] = "EXCHANGE_BRIGHTROLL_DISPLAY";
    ExchangeReviewStatusExchangeEnum["ExchangeCadreon"] = "EXCHANGE_CADREON";
    ExchangeReviewStatusExchangeEnum["ExchangeDailymotion"] = "EXCHANGE_DAILYMOTION";
    ExchangeReviewStatusExchangeEnum["ExchangeFive"] = "EXCHANGE_FIVE";
    ExchangeReviewStatusExchangeEnum["ExchangeFluct"] = "EXCHANGE_FLUCT";
    ExchangeReviewStatusExchangeEnum["ExchangeFreewheel"] = "EXCHANGE_FREEWHEEL";
    ExchangeReviewStatusExchangeEnum["ExchangeGeniee"] = "EXCHANGE_GENIEE";
    ExchangeReviewStatusExchangeEnum["ExchangeGumgum"] = "EXCHANGE_GUMGUM";
    ExchangeReviewStatusExchangeEnum["ExchangeImobile"] = "EXCHANGE_IMOBILE";
    ExchangeReviewStatusExchangeEnum["ExchangeIbillboard"] = "EXCHANGE_IBILLBOARD";
    ExchangeReviewStatusExchangeEnum["ExchangeImproveDigital"] = "EXCHANGE_IMPROVE_DIGITAL";
    ExchangeReviewStatusExchangeEnum["ExchangeIndex"] = "EXCHANGE_INDEX";
    ExchangeReviewStatusExchangeEnum["ExchangeKargo"] = "EXCHANGE_KARGO";
    ExchangeReviewStatusExchangeEnum["ExchangeMicroad"] = "EXCHANGE_MICROAD";
    ExchangeReviewStatusExchangeEnum["ExchangeMopub"] = "EXCHANGE_MOPUB";
    ExchangeReviewStatusExchangeEnum["ExchangeNend"] = "EXCHANGE_NEND";
    ExchangeReviewStatusExchangeEnum["ExchangeOneByAolDisplay"] = "EXCHANGE_ONE_BY_AOL_DISPLAY";
    ExchangeReviewStatusExchangeEnum["ExchangeOneByAolMobile"] = "EXCHANGE_ONE_BY_AOL_MOBILE";
    ExchangeReviewStatusExchangeEnum["ExchangeOneByAolVideo"] = "EXCHANGE_ONE_BY_AOL_VIDEO";
    ExchangeReviewStatusExchangeEnum["ExchangeOoyala"] = "EXCHANGE_OOYALA";
    ExchangeReviewStatusExchangeEnum["ExchangeOpenx"] = "EXCHANGE_OPENX";
    ExchangeReviewStatusExchangeEnum["ExchangePermodo"] = "EXCHANGE_PERMODO";
    ExchangeReviewStatusExchangeEnum["ExchangePlatformone"] = "EXCHANGE_PLATFORMONE";
    ExchangeReviewStatusExchangeEnum["ExchangePlatformid"] = "EXCHANGE_PLATFORMID";
    ExchangeReviewStatusExchangeEnum["ExchangePubmatic"] = "EXCHANGE_PUBMATIC";
    ExchangeReviewStatusExchangeEnum["ExchangePulsepoint"] = "EXCHANGE_PULSEPOINT";
    ExchangeReviewStatusExchangeEnum["ExchangeRevenuemax"] = "EXCHANGE_REVENUEMAX";
    ExchangeReviewStatusExchangeEnum["ExchangeRubicon"] = "EXCHANGE_RUBICON";
    ExchangeReviewStatusExchangeEnum["ExchangeSmartclip"] = "EXCHANGE_SMARTCLIP";
    ExchangeReviewStatusExchangeEnum["ExchangeSmartrtb"] = "EXCHANGE_SMARTRTB";
    ExchangeReviewStatusExchangeEnum["ExchangeSmartstreamtv"] = "EXCHANGE_SMARTSTREAMTV";
    ExchangeReviewStatusExchangeEnum["ExchangeSovrn"] = "EXCHANGE_SOVRN";
    ExchangeReviewStatusExchangeEnum["ExchangeSpotxchange"] = "EXCHANGE_SPOTXCHANGE";
    ExchangeReviewStatusExchangeEnum["ExchangeStroer"] = "EXCHANGE_STROER";
    ExchangeReviewStatusExchangeEnum["ExchangeTeadstv"] = "EXCHANGE_TEADSTV";
    ExchangeReviewStatusExchangeEnum["ExchangeTelaria"] = "EXCHANGE_TELARIA";
    ExchangeReviewStatusExchangeEnum["ExchangeTvn"] = "EXCHANGE_TVN";
    ExchangeReviewStatusExchangeEnum["ExchangeUnited"] = "EXCHANGE_UNITED";
    ExchangeReviewStatusExchangeEnum["ExchangeYieldlab"] = "EXCHANGE_YIELDLAB";
    ExchangeReviewStatusExchangeEnum["ExchangeYieldmo"] = "EXCHANGE_YIELDMO";
    ExchangeReviewStatusExchangeEnum["ExchangeUnrulyx"] = "EXCHANGE_UNRULYX";
    ExchangeReviewStatusExchangeEnum["ExchangeOpen8"] = "EXCHANGE_OPEN8";
    ExchangeReviewStatusExchangeEnum["ExchangeTriton"] = "EXCHANGE_TRITON";
    ExchangeReviewStatusExchangeEnum["ExchangeTriplelift"] = "EXCHANGE_TRIPLELIFT";
    ExchangeReviewStatusExchangeEnum["ExchangeTaboola"] = "EXCHANGE_TABOOLA";
    ExchangeReviewStatusExchangeEnum["ExchangeInmobi"] = "EXCHANGE_INMOBI";
    ExchangeReviewStatusExchangeEnum["ExchangeSmaato"] = "EXCHANGE_SMAATO";
    ExchangeReviewStatusExchangeEnum["ExchangeAja"] = "EXCHANGE_AJA";
    ExchangeReviewStatusExchangeEnum["ExchangeSupership"] = "EXCHANGE_SUPERSHIP";
    ExchangeReviewStatusExchangeEnum["ExchangeNexstarDigital"] = "EXCHANGE_NEXSTAR_DIGITAL";
    ExchangeReviewStatusExchangeEnum["ExchangeWaze"] = "EXCHANGE_WAZE";
    ExchangeReviewStatusExchangeEnum["ExchangeSoundcast"] = "EXCHANGE_SOUNDCAST";
    ExchangeReviewStatusExchangeEnum["ExchangeSharethrough"] = "EXCHANGE_SHARETHROUGH";
    ExchangeReviewStatusExchangeEnum["ExchangeFyber"] = "EXCHANGE_FYBER";
    ExchangeReviewStatusExchangeEnum["ExchangeRedForPublishers"] = "EXCHANGE_RED_FOR_PUBLISHERS";
    ExchangeReviewStatusExchangeEnum["ExchangeMedianet"] = "EXCHANGE_MEDIANET";
    ExchangeReviewStatusExchangeEnum["ExchangeTapjoy"] = "EXCHANGE_TAPJOY";
    ExchangeReviewStatusExchangeEnum["ExchangeVistar"] = "EXCHANGE_VISTAR";
    ExchangeReviewStatusExchangeEnum["ExchangeDax"] = "EXCHANGE_DAX";
})(ExchangeReviewStatusExchangeEnum || (ExchangeReviewStatusExchangeEnum = {}));
export var ExchangeReviewStatusStatusEnum;
(function (ExchangeReviewStatusStatusEnum) {
    ExchangeReviewStatusStatusEnum["ReviewStatusUnspecified"] = "REVIEW_STATUS_UNSPECIFIED";
    ExchangeReviewStatusStatusEnum["ReviewStatusApproved"] = "REVIEW_STATUS_APPROVED";
    ExchangeReviewStatusStatusEnum["ReviewStatusRejected"] = "REVIEW_STATUS_REJECTED";
    ExchangeReviewStatusStatusEnum["ReviewStatusPending"] = "REVIEW_STATUS_PENDING";
})(ExchangeReviewStatusStatusEnum || (ExchangeReviewStatusStatusEnum = {}));
// ExchangeReviewStatus
/**
 * Exchange review status for the creative.
**/
var ExchangeReviewStatus = /** @class */ (function (_super) {
    __extends(ExchangeReviewStatus, _super);
    function ExchangeReviewStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], ExchangeReviewStatus.prototype, "exchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ExchangeReviewStatus.prototype, "status", void 0);
    return ExchangeReviewStatus;
}(SpeakeasyBase));
export { ExchangeReviewStatus };
