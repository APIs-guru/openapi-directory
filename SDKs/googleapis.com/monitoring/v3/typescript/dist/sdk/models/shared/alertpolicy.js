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
import { AlertStrategy } from "./alertstrategy";
import { Condition } from "./condition";
import { MutationRecord } from "./mutationrecord";
import { Documentation } from "./documentation";
import { Status } from "./status";
export var AlertPolicyCombinerEnum;
(function (AlertPolicyCombinerEnum) {
    AlertPolicyCombinerEnum["CombineUnspecified"] = "COMBINE_UNSPECIFIED";
    AlertPolicyCombinerEnum["And"] = "AND";
    AlertPolicyCombinerEnum["Or"] = "OR";
    AlertPolicyCombinerEnum["AndWithMatchingResource"] = "AND_WITH_MATCHING_RESOURCE";
})(AlertPolicyCombinerEnum || (AlertPolicyCombinerEnum = {}));
// AlertPolicy
/**
 * A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
**/
var AlertPolicy = /** @class */ (function (_super) {
    __extends(AlertPolicy, _super);
    function AlertPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertStrategy" }),
        __metadata("design:type", AlertStrategy)
    ], AlertPolicy.prototype, "alertStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combiner" }),
        __metadata("design:type", String)
    ], AlertPolicy.prototype, "combiner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: Condition }),
        __metadata("design:type", Array)
    ], AlertPolicy.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationRecord" }),
        __metadata("design:type", MutationRecord)
    ], AlertPolicy.prototype, "creationRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AlertPolicy.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", Documentation)
    ], AlertPolicy.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], AlertPolicy.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutationRecord" }),
        __metadata("design:type", MutationRecord)
    ], AlertPolicy.prototype, "mutationRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AlertPolicy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationChannels" }),
        __metadata("design:type", Array)
    ], AlertPolicy.prototype, "notificationChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], AlertPolicy.prototype, "userLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validity" }),
        __metadata("design:type", Status)
    ], AlertPolicy.prototype, "validity", void 0);
    return AlertPolicy;
}(SpeakeasyBase));
export { AlertPolicy };
