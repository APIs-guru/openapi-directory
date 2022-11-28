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
export var ReportGoogleLocationRequestReportReasonBadLocationEnum;
(function (ReportGoogleLocationRequestReportReasonBadLocationEnum) {
    ReportGoogleLocationRequestReportReasonBadLocationEnum["BadLocationReasonUnspecified"] = "BAD_LOCATION_REASON_UNSPECIFIED";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["NotALocation"] = "NOT_A_LOCATION";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["PermanentlyClosed"] = "PERMANENTLY_CLOSED";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["DoesNotExist"] = "DOES_NOT_EXIST";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["Spam"] = "SPAM";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["NotABusiness"] = "NOT_A_BUSINESS";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["Moved"] = "MOVED";
    ReportGoogleLocationRequestReportReasonBadLocationEnum["Duplicate"] = "DUPLICATE";
})(ReportGoogleLocationRequestReportReasonBadLocationEnum || (ReportGoogleLocationRequestReportReasonBadLocationEnum = {}));
export var ReportGoogleLocationRequestReportReasonBadRecommendationEnum;
(function (ReportGoogleLocationRequestReportReasonBadRecommendationEnum) {
    ReportGoogleLocationRequestReportReasonBadRecommendationEnum["BadRecommendationReasonUnspecified"] = "BAD_RECOMMENDATION_REASON_UNSPECIFIED";
    ReportGoogleLocationRequestReportReasonBadRecommendationEnum["NotAStoreFront"] = "NOT_A_STORE_FRONT";
    ReportGoogleLocationRequestReportReasonBadRecommendationEnum["NotPartOfSuggestedChain"] = "NOT_PART_OF_SUGGESTED_CHAIN";
    ReportGoogleLocationRequestReportReasonBadRecommendationEnum["Irrelevant"] = "IRRELEVANT";
})(ReportGoogleLocationRequestReportReasonBadRecommendationEnum || (ReportGoogleLocationRequestReportReasonBadRecommendationEnum = {}));
// ReportGoogleLocationRequest
/**
 * Request message for reporting a GoogleLocation.
**/
var ReportGoogleLocationRequest = /** @class */ (function (_super) {
    __extends(ReportGoogleLocationRequest, _super);
    function ReportGoogleLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationGroupName" }),
        __metadata("design:type", String)
    ], ReportGoogleLocationRequest.prototype, "locationGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportReasonBadLocation" }),
        __metadata("design:type", String)
    ], ReportGoogleLocationRequest.prototype, "reportReasonBadLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportReasonBadRecommendation" }),
        __metadata("design:type", String)
    ], ReportGoogleLocationRequest.prototype, "reportReasonBadRecommendation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportReasonElaboration" }),
        __metadata("design:type", String)
    ], ReportGoogleLocationRequest.prototype, "reportReasonElaboration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportReasonLanguageCode" }),
        __metadata("design:type", String)
    ], ReportGoogleLocationRequest.prototype, "reportReasonLanguageCode", void 0);
    return ReportGoogleLocationRequest;
}(SpeakeasyBase));
export { ReportGoogleLocationRequest };
