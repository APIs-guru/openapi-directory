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
import { AccountItemUpdatesSettings } from "./accountitemupdatessettings";
// AccountItemUpdatesInput
/**
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
var AccountItemUpdatesInput = /** @class */ (function (_super) {
    __extends(AccountItemUpdatesInput, _super);
    function AccountItemUpdatesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountItemUpdatesSettings" }),
        __metadata("design:type", AccountItemUpdatesSettings)
    ], AccountItemUpdatesInput.prototype, "accountItemUpdatesSettings", void 0);
    return AccountItemUpdatesInput;
}(SpeakeasyBase));
export { AccountItemUpdatesInput };
// AccountItemUpdates
/**
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
**/
var AccountItemUpdates = /** @class */ (function (_super) {
    __extends(AccountItemUpdates, _super);
    function AccountItemUpdates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountItemUpdatesSettings" }),
        __metadata("design:type", AccountItemUpdatesSettings)
    ], AccountItemUpdates.prototype, "accountItemUpdatesSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveAllowAvailabilityUpdates" }),
        __metadata("design:type", Boolean)
    ], AccountItemUpdates.prototype, "effectiveAllowAvailabilityUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveAllowConditionUpdates" }),
        __metadata("design:type", Boolean)
    ], AccountItemUpdates.prototype, "effectiveAllowConditionUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveAllowPriceUpdates" }),
        __metadata("design:type", Boolean)
    ], AccountItemUpdates.prototype, "effectiveAllowPriceUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveAllowStrictAvailabilityUpdates" }),
        __metadata("design:type", Boolean)
    ], AccountItemUpdates.prototype, "effectiveAllowStrictAvailabilityUpdates", void 0);
    return AccountItemUpdates;
}(SpeakeasyBase));
export { AccountItemUpdates };
