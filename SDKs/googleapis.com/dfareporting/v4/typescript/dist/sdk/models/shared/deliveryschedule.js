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
import { FrequencyCap } from "./frequencycap";
export var DeliverySchedulePriorityEnum;
(function (DeliverySchedulePriorityEnum) {
    DeliverySchedulePriorityEnum["AdPriority01"] = "AD_PRIORITY_01";
    DeliverySchedulePriorityEnum["AdPriority02"] = "AD_PRIORITY_02";
    DeliverySchedulePriorityEnum["AdPriority03"] = "AD_PRIORITY_03";
    DeliverySchedulePriorityEnum["AdPriority04"] = "AD_PRIORITY_04";
    DeliverySchedulePriorityEnum["AdPriority05"] = "AD_PRIORITY_05";
    DeliverySchedulePriorityEnum["AdPriority06"] = "AD_PRIORITY_06";
    DeliverySchedulePriorityEnum["AdPriority07"] = "AD_PRIORITY_07";
    DeliverySchedulePriorityEnum["AdPriority08"] = "AD_PRIORITY_08";
    DeliverySchedulePriorityEnum["AdPriority09"] = "AD_PRIORITY_09";
    DeliverySchedulePriorityEnum["AdPriority10"] = "AD_PRIORITY_10";
    DeliverySchedulePriorityEnum["AdPriority11"] = "AD_PRIORITY_11";
    DeliverySchedulePriorityEnum["AdPriority12"] = "AD_PRIORITY_12";
    DeliverySchedulePriorityEnum["AdPriority13"] = "AD_PRIORITY_13";
    DeliverySchedulePriorityEnum["AdPriority14"] = "AD_PRIORITY_14";
    DeliverySchedulePriorityEnum["AdPriority15"] = "AD_PRIORITY_15";
    DeliverySchedulePriorityEnum["AdPriority16"] = "AD_PRIORITY_16";
})(DeliverySchedulePriorityEnum || (DeliverySchedulePriorityEnum = {}));
// DeliverySchedule
/**
 * Delivery Schedule.
**/
var DeliverySchedule = /** @class */ (function (_super) {
    __extends(DeliverySchedule, _super);
    function DeliverySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], DeliverySchedule.prototype, "frequencyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardCutoff" }),
        __metadata("design:type", Boolean)
    ], DeliverySchedule.prototype, "hardCutoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionRatio" }),
        __metadata("design:type", String)
    ], DeliverySchedule.prototype, "impressionRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], DeliverySchedule.prototype, "priority", void 0);
    return DeliverySchedule;
}(SpeakeasyBase));
export { DeliverySchedule };
