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
var CreateNetworkSwitchPortSchedulePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortSchedulePathParams, _super);
    function CreateNetworkSwitchPortSchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortSchedulePathParams.prototype, "networkId", void 0);
    return CreateNetworkSwitchPortSchedulePathParams;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortSchedulePathParams };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
/**
 * The schedule object for Friday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
/**
 * The schedule object for Monday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
/**
 * The schedule object for Saturday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
/**
 * The schedule object for Sunday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
/**
 * The schedule object for Thursday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
/**
 * The schedule object for Tuesday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday };
// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
/**
 * The schedule object for Wednesday.
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday.prototype, "to", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday };
// CreateNetworkSwitchPortScheduleRequestBodyPortSchedule
/**
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 *
**/
var CreateNetworkSwitchPortScheduleRequestBodyPortSchedule = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBodyPortSchedule, _super);
    function CreateNetworkSwitchPortScheduleRequestBodyPortSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "friday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "monday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saturday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "saturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sunday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "sunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thursday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "thursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tuesday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "tuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wednesday" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday)
    ], CreateNetworkSwitchPortScheduleRequestBodyPortSchedule.prototype, "wednesday", void 0);
    return CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBodyPortSchedule };
var CreateNetworkSwitchPortScheduleRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequestBody, _super);
    function CreateNetworkSwitchPortScheduleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portSchedule" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBodyPortSchedule)
    ], CreateNetworkSwitchPortScheduleRequestBody.prototype, "portSchedule", void 0);
    return CreateNetworkSwitchPortScheduleRequestBody;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequestBody };
var CreateNetworkSwitchPortScheduleRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleRequest, _super);
    function CreateNetworkSwitchPortScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkSwitchPortSchedulePathParams)
    ], CreateNetworkSwitchPortScheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSwitchPortScheduleRequestBody)
    ], CreateNetworkSwitchPortScheduleRequest.prototype, "request", void 0);
    return CreateNetworkSwitchPortScheduleRequest;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleRequest };
var CreateNetworkSwitchPortScheduleResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchPortScheduleResponse, _super);
    function CreateNetworkSwitchPortScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkSwitchPortScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchPortScheduleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkSwitchPortScheduleResponse.prototype, "createNetworkSwitchPortSchedule201ApplicationJsonObject", void 0);
    return CreateNetworkSwitchPortScheduleResponse;
}(SpeakeasyBase));
export { CreateNetworkSwitchPortScheduleResponse };
