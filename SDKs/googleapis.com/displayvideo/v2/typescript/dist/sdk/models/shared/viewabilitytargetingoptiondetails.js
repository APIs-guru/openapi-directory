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
export var ViewabilityTargetingOptionDetailsViewabilityEnum;
(function (ViewabilityTargetingOptionDetailsViewabilityEnum) {
    ViewabilityTargetingOptionDetailsViewabilityEnum["ViewabilityUnspecified"] = "VIEWABILITY_UNSPECIFIED";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability10PercentOrMore"] = "VIEWABILITY_10_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability20PercentOrMore"] = "VIEWABILITY_20_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability30PercentOrMore"] = "VIEWABILITY_30_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability40PercentOrMore"] = "VIEWABILITY_40_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability50PercentOrMore"] = "VIEWABILITY_50_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability60PercentOrMore"] = "VIEWABILITY_60_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability70PercentOrMore"] = "VIEWABILITY_70_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability80PercentOrMore"] = "VIEWABILITY_80_PERCENT_OR_MORE";
    ViewabilityTargetingOptionDetailsViewabilityEnum["Viewability90PercentOrMore"] = "VIEWABILITY_90_PERCENT_OR_MORE";
})(ViewabilityTargetingOptionDetailsViewabilityEnum || (ViewabilityTargetingOptionDetailsViewabilityEnum = {}));
// ViewabilityTargetingOptionDetails
/**
 * Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
**/
var ViewabilityTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ViewabilityTargetingOptionDetails, _super);
    function ViewabilityTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewability" }),
        __metadata("design:type", String)
    ], ViewabilityTargetingOptionDetails.prototype, "viewability", void 0);
    return ViewabilityTargetingOptionDetails;
}(SpeakeasyBase));
export { ViewabilityTargetingOptionDetails };
