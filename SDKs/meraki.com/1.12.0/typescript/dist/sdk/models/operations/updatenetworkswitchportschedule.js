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
var UpdateNetworkSwitchPortSchedulePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortSchedulePathParams, _super);
    function UpdateNetworkSwitchPortSchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortSchedulePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portScheduleId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortSchedulePathParams.prototype, "portScheduleId", void 0);
    return UpdateNetworkSwitchPortSchedulePathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortSchedulePathParams };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
/**
 * The schedule object for Friday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
/**
 * The schedule object for Monday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
/**
 * The schedule object for Saturday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
/**
 * The schedule object for Sunday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
/**
 * The schedule object for Thursday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
/**
 * The schedule object for Tuesday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
/**
 * The schedule object for Wednesday.
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday.prototype, "to", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday };
// UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule
/**
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 *
**/
var UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule, _super);
    function UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "friday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "monday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saturday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "saturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sunday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "sunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thursday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "thursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tuesday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "tuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wednesday" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday)
    ], UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "wednesday", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule };
var UpdateNetworkSwitchPortScheduleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequestBody, _super);
    function UpdateNetworkSwitchPortScheduleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portSchedule" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule)
    ], UpdateNetworkSwitchPortScheduleRequestBody.prototype, "portSchedule", void 0);
    return UpdateNetworkSwitchPortScheduleRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequestBody };
var UpdateNetworkSwitchPortScheduleRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleRequest, _super);
    function UpdateNetworkSwitchPortScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchPortSchedulePathParams)
    ], UpdateNetworkSwitchPortScheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchPortScheduleRequestBody)
    ], UpdateNetworkSwitchPortScheduleRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchPortScheduleRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleRequest };
var UpdateNetworkSwitchPortScheduleResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchPortScheduleResponse, _super);
    function UpdateNetworkSwitchPortScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchPortScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchPortScheduleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchPortScheduleResponse.prototype, "updateNetworkSwitchPortSchedule200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchPortScheduleResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchPortScheduleResponse };
