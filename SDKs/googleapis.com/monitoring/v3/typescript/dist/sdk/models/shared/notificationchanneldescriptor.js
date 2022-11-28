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
import { LabelDescriptor } from "./labeldescriptor";
export var NotificationChannelDescriptorLaunchStageEnum;
(function (NotificationChannelDescriptorLaunchStageEnum) {
    NotificationChannelDescriptorLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    NotificationChannelDescriptorLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    NotificationChannelDescriptorLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    NotificationChannelDescriptorLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    NotificationChannelDescriptorLaunchStageEnum["Alpha"] = "ALPHA";
    NotificationChannelDescriptorLaunchStageEnum["Beta"] = "BETA";
    NotificationChannelDescriptorLaunchStageEnum["Ga"] = "GA";
    NotificationChannelDescriptorLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(NotificationChannelDescriptorLaunchStageEnum || (NotificationChannelDescriptorLaunchStageEnum = {}));
export var NotificationChannelDescriptorSupportedTiersEnum;
(function (NotificationChannelDescriptorSupportedTiersEnum) {
    NotificationChannelDescriptorSupportedTiersEnum["ServiceTierUnspecified"] = "SERVICE_TIER_UNSPECIFIED";
    NotificationChannelDescriptorSupportedTiersEnum["ServiceTierBasic"] = "SERVICE_TIER_BASIC";
    NotificationChannelDescriptorSupportedTiersEnum["ServiceTierPremium"] = "SERVICE_TIER_PREMIUM";
})(NotificationChannelDescriptorSupportedTiersEnum || (NotificationChannelDescriptorSupportedTiersEnum = {}));
// NotificationChannelDescriptor
/**
 * A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
**/
var NotificationChannelDescriptor = /** @class */ (function (_super) {
    __extends(NotificationChannelDescriptor, _super);
    function NotificationChannelDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NotificationChannelDescriptor.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], NotificationChannelDescriptor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: LabelDescriptor }),
        __metadata("design:type", Array)
    ], NotificationChannelDescriptor.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], NotificationChannelDescriptor.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NotificationChannelDescriptor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedTiers" }),
        __metadata("design:type", Array)
    ], NotificationChannelDescriptor.prototype, "supportedTiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationChannelDescriptor.prototype, "type", void 0);
    return NotificationChannelDescriptor;
}(SpeakeasyBase));
export { NotificationChannelDescriptor };
