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
export var NodePoolAutoscalingLocationPolicyEnum;
(function (NodePoolAutoscalingLocationPolicyEnum) {
    NodePoolAutoscalingLocationPolicyEnum["LocationPolicyUnspecified"] = "LOCATION_POLICY_UNSPECIFIED";
    NodePoolAutoscalingLocationPolicyEnum["Balanced"] = "BALANCED";
    NodePoolAutoscalingLocationPolicyEnum["Any"] = "ANY";
})(NodePoolAutoscalingLocationPolicyEnum || (NodePoolAutoscalingLocationPolicyEnum = {}));
// NodePoolAutoscaling
/**
 * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
**/
var NodePoolAutoscaling = /** @class */ (function (_super) {
    __extends(NodePoolAutoscaling, _super);
    function NodePoolAutoscaling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoprovisioned" }),
        __metadata("design:type", Boolean)
    ], NodePoolAutoscaling.prototype, "autoprovisioned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], NodePoolAutoscaling.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationPolicy" }),
        __metadata("design:type", String)
    ], NodePoolAutoscaling.prototype, "locationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxNodeCount" }),
        __metadata("design:type", Number)
    ], NodePoolAutoscaling.prototype, "maxNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minNodeCount" }),
        __metadata("design:type", Number)
    ], NodePoolAutoscaling.prototype, "minNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalMaxNodeCount" }),
        __metadata("design:type", Number)
    ], NodePoolAutoscaling.prototype, "totalMaxNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalMinNodeCount" }),
        __metadata("design:type", Number)
    ], NodePoolAutoscaling.prototype, "totalMinNodeCount", void 0);
    return NodePoolAutoscaling;
}(SpeakeasyBase));
export { NodePoolAutoscaling };
