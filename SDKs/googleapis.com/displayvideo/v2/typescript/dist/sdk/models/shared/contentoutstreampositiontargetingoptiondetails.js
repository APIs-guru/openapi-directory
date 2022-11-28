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
export var ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum;
(function (ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum) {
    ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionUnspecified"] = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED";
    ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionUnknown"] = "CONTENT_OUTSTREAM_POSITION_UNKNOWN";
    ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInArticle"] = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE";
    ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInBanner"] = "CONTENT_OUTSTREAM_POSITION_IN_BANNER";
    ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInFeed"] = "CONTENT_OUTSTREAM_POSITION_IN_FEED";
    ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInterstitial"] = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL";
})(ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum || (ContentOutstreamPositionTargetingOptionDetailsContentOutstreamPositionEnum = {}));
// ContentOutstreamPositionTargetingOptionDetails
/**
 * Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
var ContentOutstreamPositionTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ContentOutstreamPositionTargetingOptionDetails, _super);
    function ContentOutstreamPositionTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOutstreamPosition" }),
        __metadata("design:type", String)
    ], ContentOutstreamPositionTargetingOptionDetails.prototype, "contentOutstreamPosition", void 0);
    return ContentOutstreamPositionTargetingOptionDetails;
}(SpeakeasyBase));
export { ContentOutstreamPositionTargetingOptionDetails };
