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
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
export var GoogleAppsCardV1DateTimePickerTypeEnum;
(function (GoogleAppsCardV1DateTimePickerTypeEnum) {
    GoogleAppsCardV1DateTimePickerTypeEnum["DateAndTime"] = "DATE_AND_TIME";
    GoogleAppsCardV1DateTimePickerTypeEnum["DateOnly"] = "DATE_ONLY";
    GoogleAppsCardV1DateTimePickerTypeEnum["TimeOnly"] = "TIME_ONLY";
})(GoogleAppsCardV1DateTimePickerTypeEnum || (GoogleAppsCardV1DateTimePickerTypeEnum = {}));
// GoogleAppsCardV1DateTimePicker
/**
 * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
**/
var GoogleAppsCardV1DateTimePicker = /** @class */ (function (_super) {
    __extends(GoogleAppsCardV1DateTimePicker, _super);
    function GoogleAppsCardV1DateTimePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DateTimePicker.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DateTimePicker.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onChangeAction" }),
        __metadata("design:type", GoogleAppsCardV1Action)
    ], GoogleAppsCardV1DateTimePicker.prototype, "onChangeAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneOffsetDate" }),
        __metadata("design:type", Number)
    ], GoogleAppsCardV1DateTimePicker.prototype, "timezoneOffsetDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DateTimePicker.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueMsEpoch" }),
        __metadata("design:type", String)
    ], GoogleAppsCardV1DateTimePicker.prototype, "valueMsEpoch", void 0);
    return GoogleAppsCardV1DateTimePicker;
}(SpeakeasyBase));
export { GoogleAppsCardV1DateTimePicker };
