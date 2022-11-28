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
import { DateRange } from "./daterange";
export var LineItemFlightFlightDateTypeEnum;
(function (LineItemFlightFlightDateTypeEnum) {
    LineItemFlightFlightDateTypeEnum["LineItemFlightDateTypeUnspecified"] = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED";
    LineItemFlightFlightDateTypeEnum["LineItemFlightDateTypeInherited"] = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED";
    LineItemFlightFlightDateTypeEnum["LineItemFlightDateTypeCustom"] = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM";
    LineItemFlightFlightDateTypeEnum["LineItemFlightDateTypeTrigger"] = "LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER";
})(LineItemFlightFlightDateTypeEnum || (LineItemFlightFlightDateTypeEnum = {}));
// LineItemFlight
/**
 * Settings that control the active duration of a line item.
**/
var LineItemFlight = /** @class */ (function (_super) {
    __extends(LineItemFlight, _super);
    function LineItemFlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], LineItemFlight.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flightDateType" }),
        __metadata("design:type", String)
    ], LineItemFlight.prototype, "flightDateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], LineItemFlight.prototype, "triggerId", void 0);
    return LineItemFlight;
}(SpeakeasyBase));
export { LineItemFlight };
