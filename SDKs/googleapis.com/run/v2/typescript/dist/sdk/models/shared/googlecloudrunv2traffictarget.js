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
export var GoogleCloudRunV2TrafficTargetTypeEnum;
(function (GoogleCloudRunV2TrafficTargetTypeEnum) {
    GoogleCloudRunV2TrafficTargetTypeEnum["TrafficTargetAllocationTypeUnspecified"] = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED";
    GoogleCloudRunV2TrafficTargetTypeEnum["TrafficTargetAllocationTypeLatest"] = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST";
    GoogleCloudRunV2TrafficTargetTypeEnum["TrafficTargetAllocationTypeRevision"] = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION";
})(GoogleCloudRunV2TrafficTargetTypeEnum || (GoogleCloudRunV2TrafficTargetTypeEnum = {}));
// GoogleCloudRunV2TrafficTarget
/**
 * Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
**/
var GoogleCloudRunV2TrafficTarget = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2TrafficTarget, _super);
    function GoogleCloudRunV2TrafficTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2TrafficTarget.prototype, "percent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2TrafficTarget.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2TrafficTarget.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2TrafficTarget.prototype, "type", void 0);
    return GoogleCloudRunV2TrafficTarget;
}(SpeakeasyBase));
export { GoogleCloudRunV2TrafficTarget };
