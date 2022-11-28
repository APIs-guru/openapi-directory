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
export var FamiliesBabysittingExceptionEnum;
(function (FamiliesBabysittingExceptionEnum) {
    FamiliesBabysittingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FamiliesBabysittingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FamiliesBabysittingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FamiliesBabysittingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FamiliesBabysittingExceptionEnum || (FamiliesBabysittingExceptionEnum = {}));
export var FamiliesKidsActivitiesExceptionEnum;
(function (FamiliesKidsActivitiesExceptionEnum) {
    FamiliesKidsActivitiesExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FamiliesKidsActivitiesExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FamiliesKidsActivitiesExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FamiliesKidsActivitiesExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FamiliesKidsActivitiesExceptionEnum || (FamiliesKidsActivitiesExceptionEnum = {}));
export var FamiliesKidsClubExceptionEnum;
(function (FamiliesKidsClubExceptionEnum) {
    FamiliesKidsClubExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    FamiliesKidsClubExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    FamiliesKidsClubExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    FamiliesKidsClubExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(FamiliesKidsClubExceptionEnum || (FamiliesKidsClubExceptionEnum = {}));
// Families
/**
 * Services and amenities for families and young guests.
**/
var Families = /** @class */ (function (_super) {
    __extends(Families, _super);
    function Families() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=babysitting" }),
        __metadata("design:type", Boolean)
    ], Families.prototype, "babysitting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=babysittingException" }),
        __metadata("design:type", String)
    ], Families.prototype, "babysittingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kidsActivities" }),
        __metadata("design:type", Boolean)
    ], Families.prototype, "kidsActivities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kidsActivitiesException" }),
        __metadata("design:type", String)
    ], Families.prototype, "kidsActivitiesException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kidsClub" }),
        __metadata("design:type", Boolean)
    ], Families.prototype, "kidsClub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kidsClubException" }),
        __metadata("design:type", String)
    ], Families.prototype, "kidsClubException", void 0);
    return Families;
}(SpeakeasyBase));
export { Families };
