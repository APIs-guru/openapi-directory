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
export var NotificationSettingNotificationTypesEnum;
(function (NotificationSettingNotificationTypesEnum) {
    NotificationSettingNotificationTypesEnum["NotificationTypeUnspecified"] = "NOTIFICATION_TYPE_UNSPECIFIED";
    NotificationSettingNotificationTypesEnum["GoogleUpdate"] = "GOOGLE_UPDATE";
    NotificationSettingNotificationTypesEnum["NewReview"] = "NEW_REVIEW";
    NotificationSettingNotificationTypesEnum["UpdatedReview"] = "UPDATED_REVIEW";
    NotificationSettingNotificationTypesEnum["NewCustomerMedia"] = "NEW_CUSTOMER_MEDIA";
    NotificationSettingNotificationTypesEnum["NewQuestion"] = "NEW_QUESTION";
    NotificationSettingNotificationTypesEnum["UpdatedQuestion"] = "UPDATED_QUESTION";
    NotificationSettingNotificationTypesEnum["NewAnswer"] = "NEW_ANSWER";
    NotificationSettingNotificationTypesEnum["UpdatedAnswer"] = "UPDATED_ANSWER";
    NotificationSettingNotificationTypesEnum["DuplicateLocation"] = "DUPLICATE_LOCATION";
    NotificationSettingNotificationTypesEnum["LossOfVoiceOfMerchant"] = "LOSS_OF_VOICE_OF_MERCHANT";
    NotificationSettingNotificationTypesEnum["VoiceOfMerchantUpdated"] = "VOICE_OF_MERCHANT_UPDATED";
})(NotificationSettingNotificationTypesEnum || (NotificationSettingNotificationTypesEnum = {}));
// NotificationSetting
/**
 * A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
**/
var NotificationSetting = /** @class */ (function (_super) {
    __extends(NotificationSetting, _super);
    function NotificationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NotificationSetting.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationTypes" }),
        __metadata("design:type", Array)
    ], NotificationSetting.prototype, "notificationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubTopic" }),
        __metadata("design:type", String)
    ], NotificationSetting.prototype, "pubsubTopic", void 0);
    return NotificationSetting;
}(SpeakeasyBase));
export { NotificationSetting };
