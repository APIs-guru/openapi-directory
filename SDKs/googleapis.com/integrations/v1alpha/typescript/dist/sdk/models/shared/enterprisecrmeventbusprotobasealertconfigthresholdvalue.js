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
// EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue
/**
 * The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. See go/eventbus-alert-config-examples
**/
var EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue, _super);
    function EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absolute" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue.prototype, "absolute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue.prototype, "percentage", void 0);
    return EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue };
