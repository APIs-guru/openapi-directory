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
export var DeploymentOccurrencePlatformEnum;
(function (DeploymentOccurrencePlatformEnum) {
    DeploymentOccurrencePlatformEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    DeploymentOccurrencePlatformEnum["Gke"] = "GKE";
    DeploymentOccurrencePlatformEnum["Flex"] = "FLEX";
    DeploymentOccurrencePlatformEnum["Custom"] = "CUSTOM";
})(DeploymentOccurrencePlatformEnum || (DeploymentOccurrencePlatformEnum = {}));
// DeploymentOccurrence
/**
 * The period during which some deployable was active in a runtime.
**/
var DeploymentOccurrence = /** @class */ (function (_super) {
    __extends(DeploymentOccurrence, _super);
    function DeploymentOccurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], DeploymentOccurrence.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", String)
    ], DeploymentOccurrence.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployTime" }),
        __metadata("design:type", String)
    ], DeploymentOccurrence.prototype, "deployTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], DeploymentOccurrence.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUri" }),
        __metadata("design:type", Array)
    ], DeploymentOccurrence.prototype, "resourceUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=undeployTime" }),
        __metadata("design:type", String)
    ], DeploymentOccurrence.prototype, "undeployTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEmail" }),
        __metadata("design:type", String)
    ], DeploymentOccurrence.prototype, "userEmail", void 0);
    return DeploymentOccurrence;
}(SpeakeasyBase));
export { DeploymentOccurrence };
