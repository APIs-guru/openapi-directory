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
export var ContentDurationTargetingOptionDetailsContentDurationEnum;
(function (ContentDurationTargetingOptionDetailsContentDurationEnum) {
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDurationUnspecified"] = "CONTENT_DURATION_UNSPECIFIED";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDurationUnknown"] = "CONTENT_DURATION_UNKNOWN";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDuration0To1Min"] = "CONTENT_DURATION_0_TO_1_MIN";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDuration1To5Min"] = "CONTENT_DURATION_1_TO_5_MIN";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDuration5To15Min"] = "CONTENT_DURATION_5_TO_15_MIN";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDuration15To30Min"] = "CONTENT_DURATION_15_TO_30_MIN";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDuration30To60Min"] = "CONTENT_DURATION_30_TO_60_MIN";
    ContentDurationTargetingOptionDetailsContentDurationEnum["ContentDurationOver60Min"] = "CONTENT_DURATION_OVER_60_MIN";
})(ContentDurationTargetingOptionDetailsContentDurationEnum || (ContentDurationTargetingOptionDetailsContentDurationEnum = {}));
// ContentDurationTargetingOptionDetails
/**
 * Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.
**/
var ContentDurationTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ContentDurationTargetingOptionDetails, _super);
    function ContentDurationTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDuration" }),
        __metadata("design:type", String)
    ], ContentDurationTargetingOptionDetails.prototype, "contentDuration", void 0);
    return ContentDurationTargetingOptionDetails;
}(SpeakeasyBase));
export { ContentDurationTargetingOptionDetails };
