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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StateAndNotificationPayload } from "./stateandnotificationpayload";
// ReportStateAndNotificationRequest
/**
 * Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ```
**/
var ReportStateAndNotificationRequest = /** @class */ (function (_super) {
    __extends(ReportStateAndNotificationRequest, _super);
    function ReportStateAndNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=agentUserId" }),
        __metadata("design:type", String)
    ], ReportStateAndNotificationRequest.prototype, "agentUserId", void 0);
    __decorate([
        Metadata({ data: "json, name=eventId" }),
        __metadata("design:type", String)
    ], ReportStateAndNotificationRequest.prototype, "eventId", void 0);
    __decorate([
        Metadata({ data: "json, name=followUpToken" }),
        __metadata("design:type", String)
    ], ReportStateAndNotificationRequest.prototype, "followUpToken", void 0);
    __decorate([
        Metadata({ data: "json, name=payload" }),
        __metadata("design:type", StateAndNotificationPayload)
    ], ReportStateAndNotificationRequest.prototype, "payload", void 0);
    __decorate([
        Metadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ReportStateAndNotificationRequest.prototype, "requestId", void 0);
    return ReportStateAndNotificationRequest;
}(SpeakeasyBase));
export { ReportStateAndNotificationRequest };
