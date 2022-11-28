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
export var PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum;
(function (PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum) {
    PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum || (PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum = {}));
export var PersonalProtectionFaceMaskRequiredExceptionEnum;
(function (PersonalProtectionFaceMaskRequiredExceptionEnum) {
    PersonalProtectionFaceMaskRequiredExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PersonalProtectionFaceMaskRequiredExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PersonalProtectionFaceMaskRequiredExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PersonalProtectionFaceMaskRequiredExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PersonalProtectionFaceMaskRequiredExceptionEnum || (PersonalProtectionFaceMaskRequiredExceptionEnum = {}));
export var PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum;
(function (PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum) {
    PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum || (PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum = {}));
export var PersonalProtectionProtectiveEquipmentAvailableExceptionEnum;
(function (PersonalProtectionProtectiveEquipmentAvailableExceptionEnum) {
    PersonalProtectionProtectiveEquipmentAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PersonalProtectionProtectiveEquipmentAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PersonalProtectionProtectiveEquipmentAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PersonalProtectionProtectiveEquipmentAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PersonalProtectionProtectiveEquipmentAvailableExceptionEnum || (PersonalProtectionProtectiveEquipmentAvailableExceptionEnum = {}));
// PersonalProtection
/**
 * Personal protection measures implemented by the hotel during COVID-19.
**/
var PersonalProtection = /** @class */ (function (_super) {
    __extends(PersonalProtection, _super);
    function PersonalProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonAreasOfferSanitizingItems" }),
        __metadata("design:type", Boolean)
    ], PersonalProtection.prototype, "commonAreasOfferSanitizingItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonAreasOfferSanitizingItemsException" }),
        __metadata("design:type", String)
    ], PersonalProtection.prototype, "commonAreasOfferSanitizingItemsException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faceMaskRequired" }),
        __metadata("design:type", Boolean)
    ], PersonalProtection.prototype, "faceMaskRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faceMaskRequiredException" }),
        __metadata("design:type", String)
    ], PersonalProtection.prototype, "faceMaskRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestRoomHygieneKitsAvailable" }),
        __metadata("design:type", Boolean)
    ], PersonalProtection.prototype, "guestRoomHygieneKitsAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestRoomHygieneKitsAvailableException" }),
        __metadata("design:type", String)
    ], PersonalProtection.prototype, "guestRoomHygieneKitsAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectiveEquipmentAvailable" }),
        __metadata("design:type", Boolean)
    ], PersonalProtection.prototype, "protectiveEquipmentAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectiveEquipmentAvailableException" }),
        __metadata("design:type", String)
    ], PersonalProtection.prototype, "protectiveEquipmentAvailableException", void 0);
    return PersonalProtection;
}(SpeakeasyBase));
export { PersonalProtection };
