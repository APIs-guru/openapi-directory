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
import { MutationRecord } from "./mutationrecord";
export var NotificationChannelVerificationStatusEnum;
(function (NotificationChannelVerificationStatusEnum) {
    NotificationChannelVerificationStatusEnum["VerificationStatusUnspecified"] = "VERIFICATION_STATUS_UNSPECIFIED";
    NotificationChannelVerificationStatusEnum["Unverified"] = "UNVERIFIED";
    NotificationChannelVerificationStatusEnum["Verified"] = "VERIFIED";
})(NotificationChannelVerificationStatusEnum || (NotificationChannelVerificationStatusEnum = {}));
// NotificationChannel
/**
 * A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
**/
var NotificationChannel = /** @class */ (function (_super) {
    __extends(NotificationChannel, _super);
    function NotificationChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationRecord" }),
        __metadata("design:type", MutationRecord)
    ], NotificationChannel.prototype, "creationRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NotificationChannel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], NotificationChannel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], NotificationChannel.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], NotificationChannel.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutationRecords", elemType: MutationRecord }),
        __metadata("design:type", Array)
    ], NotificationChannel.prototype, "mutationRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NotificationChannel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationChannel.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], NotificationChannel.prototype, "userLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verificationStatus" }),
        __metadata("design:type", String)
    ], NotificationChannel.prototype, "verificationStatus", void 0);
    return NotificationChannel;
}(SpeakeasyBase));
export { NotificationChannel };
