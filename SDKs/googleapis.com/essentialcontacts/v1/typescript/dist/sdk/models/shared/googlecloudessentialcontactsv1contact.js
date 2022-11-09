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
export var GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum;
(function (GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum) {
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["NotificationCategoryUnspecified"] = "NOTIFICATION_CATEGORY_UNSPECIFIED";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["All"] = "ALL";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["Suspension"] = "SUSPENSION";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["Security"] = "SECURITY";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["Technical"] = "TECHNICAL";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["Billing"] = "BILLING";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["Legal"] = "LEGAL";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["ProductUpdates"] = "PRODUCT_UPDATES";
    GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum["TechnicalIncidents"] = "TECHNICAL_INCIDENTS";
})(GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum || (GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum = {}));
export var GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
(function (GoogleCloudEssentialcontactsV1ContactValidationStateEnum) {
    GoogleCloudEssentialcontactsV1ContactValidationStateEnum["ValidationStateUnspecified"] = "VALIDATION_STATE_UNSPECIFIED";
    GoogleCloudEssentialcontactsV1ContactValidationStateEnum["Valid"] = "VALID";
    GoogleCloudEssentialcontactsV1ContactValidationStateEnum["Invalid"] = "INVALID";
})(GoogleCloudEssentialcontactsV1ContactValidationStateEnum || (GoogleCloudEssentialcontactsV1ContactValidationStateEnum = {}));
// GoogleCloudEssentialcontactsV1Contact
/**
 * A contact that will receive notifications from Google Cloud.
**/
var GoogleCloudEssentialcontactsV1Contact = /** @class */ (function (_super) {
    __extends(GoogleCloudEssentialcontactsV1Contact, _super);
    function GoogleCloudEssentialcontactsV1Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GoogleCloudEssentialcontactsV1Contact.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=languageTag" }),
        __metadata("design:type", String)
    ], GoogleCloudEssentialcontactsV1Contact.prototype, "languageTag", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudEssentialcontactsV1Contact.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=notificationCategorySubscriptions" }),
        __metadata("design:type", Array)
    ], GoogleCloudEssentialcontactsV1Contact.prototype, "notificationCategorySubscriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=validateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudEssentialcontactsV1Contact.prototype, "validateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=validationState" }),
        __metadata("design:type", String)
    ], GoogleCloudEssentialcontactsV1Contact.prototype, "validationState", void 0);
    return GoogleCloudEssentialcontactsV1Contact;
}(SpeakeasyBase));
export { GoogleCloudEssentialcontactsV1Contact };
