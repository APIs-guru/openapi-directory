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
import { TrafficPercentStrategy } from "./trafficpercentstrategy";
export var RolloutStatusEnum;
(function (RolloutStatusEnum) {
    RolloutStatusEnum["RolloutStatusUnspecified"] = "ROLLOUT_STATUS_UNSPECIFIED";
    RolloutStatusEnum["InProgress"] = "IN_PROGRESS";
    RolloutStatusEnum["Success"] = "SUCCESS";
    RolloutStatusEnum["Cancelled"] = "CANCELLED";
    RolloutStatusEnum["Failed"] = "FAILED";
    RolloutStatusEnum["Pending"] = "PENDING";
    RolloutStatusEnum["FailedRolledBack"] = "FAILED_ROLLED_BACK";
})(RolloutStatusEnum || (RolloutStatusEnum = {}));
// Rollout
/**
 * A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
**/
var Rollout = /** @class */ (function (_super) {
    __extends(Rollout, _super);
    function Rollout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteServiceStrategy" }),
        __metadata("design:type", Map)
    ], Rollout.prototype, "deleteServiceStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutId" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "rolloutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficPercentStrategy" }),
        __metadata("design:type", TrafficPercentStrategy)
    ], Rollout.prototype, "trafficPercentStrategy", void 0);
    return Rollout;
}(SpeakeasyBase));
export { Rollout };
