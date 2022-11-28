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
export var NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
(function (NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum) {
    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum["NativeContentPositionUnspecified"] = "NATIVE_CONTENT_POSITION_UNSPECIFIED";
    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum["NativeContentPositionUnknown"] = "NATIVE_CONTENT_POSITION_UNKNOWN";
    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum["NativeContentPositionInArticle"] = "NATIVE_CONTENT_POSITION_IN_ARTICLE";
    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum["NativeContentPositionInFeed"] = "NATIVE_CONTENT_POSITION_IN_FEED";
    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum["NativeContentPositionPeripheral"] = "NATIVE_CONTENT_POSITION_PERIPHERAL";
    NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum["NativeContentPositionRecommendation"] = "NATIVE_CONTENT_POSITION_RECOMMENDATION";
})(NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum || (NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum = {}));
// NativeContentPositionAssignedTargetingOptionDetails
/**
 * Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.
**/
var NativeContentPositionAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(NativeContentPositionAssignedTargetingOptionDetails, _super);
    function NativeContentPositionAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentPosition" }),
        __metadata("design:type", String)
    ], NativeContentPositionAssignedTargetingOptionDetails.prototype, "contentPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], NativeContentPositionAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return NativeContentPositionAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { NativeContentPositionAssignedTargetingOptionDetails };
