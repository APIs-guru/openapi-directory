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
// UsersettingsNotesExport
/**
 * User settings in sub-objects, each for different purposes.
**/
var UsersettingsNotesExport = /** @class */ (function (_super) {
    __extends(UsersettingsNotesExport, _super);
    function UsersettingsNotesExport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderName" }),
        __metadata("design:type", String)
    ], UsersettingsNotesExport.prototype, "folderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnabled" }),
        __metadata("design:type", Boolean)
    ], UsersettingsNotesExport.prototype, "isEnabled", void 0);
    return UsersettingsNotesExport;
}(SpeakeasyBase));
export { UsersettingsNotesExport };
var UsersettingsNotificationMatchMyInterests = /** @class */ (function (_super) {
    __extends(UsersettingsNotificationMatchMyInterests, _super);
    function UsersettingsNotificationMatchMyInterests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opted_state" }),
        __metadata("design:type", String)
    ], UsersettingsNotificationMatchMyInterests.prototype, "optedState", void 0);
    return UsersettingsNotificationMatchMyInterests;
}(SpeakeasyBase));
export { UsersettingsNotificationMatchMyInterests };
var UsersettingsNotificationMoreFromAuthors = /** @class */ (function (_super) {
    __extends(UsersettingsNotificationMoreFromAuthors, _super);
    function UsersettingsNotificationMoreFromAuthors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opted_state" }),
        __metadata("design:type", String)
    ], UsersettingsNotificationMoreFromAuthors.prototype, "optedState", void 0);
    return UsersettingsNotificationMoreFromAuthors;
}(SpeakeasyBase));
export { UsersettingsNotificationMoreFromAuthors };
var UsersettingsNotificationMoreFromSeries = /** @class */ (function (_super) {
    __extends(UsersettingsNotificationMoreFromSeries, _super);
    function UsersettingsNotificationMoreFromSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opted_state" }),
        __metadata("design:type", String)
    ], UsersettingsNotificationMoreFromSeries.prototype, "optedState", void 0);
    return UsersettingsNotificationMoreFromSeries;
}(SpeakeasyBase));
export { UsersettingsNotificationMoreFromSeries };
var UsersettingsNotificationPriceDrop = /** @class */ (function (_super) {
    __extends(UsersettingsNotificationPriceDrop, _super);
    function UsersettingsNotificationPriceDrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opted_state" }),
        __metadata("design:type", String)
    ], UsersettingsNotificationPriceDrop.prototype, "optedState", void 0);
    return UsersettingsNotificationPriceDrop;
}(SpeakeasyBase));
export { UsersettingsNotificationPriceDrop };
var UsersettingsNotificationRewardExpirations = /** @class */ (function (_super) {
    __extends(UsersettingsNotificationRewardExpirations, _super);
    function UsersettingsNotificationRewardExpirations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opted_state" }),
        __metadata("design:type", String)
    ], UsersettingsNotificationRewardExpirations.prototype, "optedState", void 0);
    return UsersettingsNotificationRewardExpirations;
}(SpeakeasyBase));
export { UsersettingsNotificationRewardExpirations };
var UsersettingsNotification = /** @class */ (function (_super) {
    __extends(UsersettingsNotification, _super);
    function UsersettingsNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchMyInterests" }),
        __metadata("design:type", UsersettingsNotificationMatchMyInterests)
    ], UsersettingsNotification.prototype, "matchMyInterests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreFromAuthors" }),
        __metadata("design:type", UsersettingsNotificationMoreFromAuthors)
    ], UsersettingsNotification.prototype, "moreFromAuthors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreFromSeries" }),
        __metadata("design:type", UsersettingsNotificationMoreFromSeries)
    ], UsersettingsNotification.prototype, "moreFromSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceDrop" }),
        __metadata("design:type", UsersettingsNotificationPriceDrop)
    ], UsersettingsNotification.prototype, "priceDrop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rewardExpirations" }),
        __metadata("design:type", UsersettingsNotificationRewardExpirations)
    ], UsersettingsNotification.prototype, "rewardExpirations", void 0);
    return UsersettingsNotification;
}(SpeakeasyBase));
export { UsersettingsNotification };
var Usersettings = /** @class */ (function (_super) {
    __extends(Usersettings, _super);
    function Usersettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Usersettings.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notesExport" }),
        __metadata("design:type", UsersettingsNotesExport)
    ], Usersettings.prototype, "notesExport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification" }),
        __metadata("design:type", UsersettingsNotification)
    ], Usersettings.prototype, "notification", void 0);
    return Usersettings;
}(SpeakeasyBase));
export { Usersettings };
