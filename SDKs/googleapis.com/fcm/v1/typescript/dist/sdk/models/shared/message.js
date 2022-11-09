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
import { AndroidConfig } from "./androidconfig";
import { ApnsConfig } from "./apnsconfig";
import { FcmOptions } from "./fcmoptions";
import { Notification } from "./notification";
import { WebpushConfig } from "./webpushconfig";
// Message
/**
 * Message to send by Firebase Cloud Messaging Service.
**/
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=android" }),
        __metadata("design:type", AndroidConfig)
    ], Message.prototype, "android", void 0);
    __decorate([
        Metadata({ data: "json, name=apns" }),
        __metadata("design:type", ApnsConfig)
    ], Message.prototype, "apns", void 0);
    __decorate([
        Metadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], Message.prototype, "condition", void 0);
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], Message.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "json, name=fcmOptions" }),
        __metadata("design:type", FcmOptions)
    ], Message.prototype, "fcmOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Message.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=notification" }),
        __metadata("design:type", Notification)
    ], Message.prototype, "notification", void 0);
    __decorate([
        Metadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], Message.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], Message.prototype, "topic", void 0);
    __decorate([
        Metadata({ data: "json, name=webpush" }),
        __metadata("design:type", WebpushConfig)
    ], Message.prototype, "webpush", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
