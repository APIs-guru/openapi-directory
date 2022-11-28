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
export var ActivitiesBeachAccessExceptionEnum;
(function (ActivitiesBeachAccessExceptionEnum) {
    ActivitiesBeachAccessExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesBeachAccessExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesBeachAccessExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesBeachAccessExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesBeachAccessExceptionEnum || (ActivitiesBeachAccessExceptionEnum = {}));
export var ActivitiesBeachFrontExceptionEnum;
(function (ActivitiesBeachFrontExceptionEnum) {
    ActivitiesBeachFrontExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesBeachFrontExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesBeachFrontExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesBeachFrontExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesBeachFrontExceptionEnum || (ActivitiesBeachFrontExceptionEnum = {}));
export var ActivitiesBicycleRentalExceptionEnum;
(function (ActivitiesBicycleRentalExceptionEnum) {
    ActivitiesBicycleRentalExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesBicycleRentalExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesBicycleRentalExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesBicycleRentalExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesBicycleRentalExceptionEnum || (ActivitiesBicycleRentalExceptionEnum = {}));
export var ActivitiesBoutiqueStoresExceptionEnum;
(function (ActivitiesBoutiqueStoresExceptionEnum) {
    ActivitiesBoutiqueStoresExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesBoutiqueStoresExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesBoutiqueStoresExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesBoutiqueStoresExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesBoutiqueStoresExceptionEnum || (ActivitiesBoutiqueStoresExceptionEnum = {}));
export var ActivitiesCasinoExceptionEnum;
(function (ActivitiesCasinoExceptionEnum) {
    ActivitiesCasinoExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesCasinoExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesCasinoExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesCasinoExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesCasinoExceptionEnum || (ActivitiesCasinoExceptionEnum = {}));
export var ActivitiesFreeBicycleRentalExceptionEnum;
(function (ActivitiesFreeBicycleRentalExceptionEnum) {
    ActivitiesFreeBicycleRentalExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesFreeBicycleRentalExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesFreeBicycleRentalExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesFreeBicycleRentalExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesFreeBicycleRentalExceptionEnum || (ActivitiesFreeBicycleRentalExceptionEnum = {}));
export var ActivitiesFreeWatercraftRentalExceptionEnum;
(function (ActivitiesFreeWatercraftRentalExceptionEnum) {
    ActivitiesFreeWatercraftRentalExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesFreeWatercraftRentalExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesFreeWatercraftRentalExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesFreeWatercraftRentalExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesFreeWatercraftRentalExceptionEnum || (ActivitiesFreeWatercraftRentalExceptionEnum = {}));
export var ActivitiesGameRoomExceptionEnum;
(function (ActivitiesGameRoomExceptionEnum) {
    ActivitiesGameRoomExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesGameRoomExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesGameRoomExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesGameRoomExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesGameRoomExceptionEnum || (ActivitiesGameRoomExceptionEnum = {}));
export var ActivitiesGolfExceptionEnum;
(function (ActivitiesGolfExceptionEnum) {
    ActivitiesGolfExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesGolfExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesGolfExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesGolfExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesGolfExceptionEnum || (ActivitiesGolfExceptionEnum = {}));
export var ActivitiesHorsebackRidingExceptionEnum;
(function (ActivitiesHorsebackRidingExceptionEnum) {
    ActivitiesHorsebackRidingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesHorsebackRidingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesHorsebackRidingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesHorsebackRidingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesHorsebackRidingExceptionEnum || (ActivitiesHorsebackRidingExceptionEnum = {}));
export var ActivitiesNightclubExceptionEnum;
(function (ActivitiesNightclubExceptionEnum) {
    ActivitiesNightclubExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesNightclubExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesNightclubExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesNightclubExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesNightclubExceptionEnum || (ActivitiesNightclubExceptionEnum = {}));
export var ActivitiesPrivateBeachExceptionEnum;
(function (ActivitiesPrivateBeachExceptionEnum) {
    ActivitiesPrivateBeachExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesPrivateBeachExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesPrivateBeachExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesPrivateBeachExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesPrivateBeachExceptionEnum || (ActivitiesPrivateBeachExceptionEnum = {}));
export var ActivitiesScubaExceptionEnum;
(function (ActivitiesScubaExceptionEnum) {
    ActivitiesScubaExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesScubaExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesScubaExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesScubaExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesScubaExceptionEnum || (ActivitiesScubaExceptionEnum = {}));
export var ActivitiesSnorkelingExceptionEnum;
(function (ActivitiesSnorkelingExceptionEnum) {
    ActivitiesSnorkelingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesSnorkelingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesSnorkelingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesSnorkelingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesSnorkelingExceptionEnum || (ActivitiesSnorkelingExceptionEnum = {}));
export var ActivitiesTennisExceptionEnum;
(function (ActivitiesTennisExceptionEnum) {
    ActivitiesTennisExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesTennisExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesTennisExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesTennisExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesTennisExceptionEnum || (ActivitiesTennisExceptionEnum = {}));
export var ActivitiesWaterSkiingExceptionEnum;
(function (ActivitiesWaterSkiingExceptionEnum) {
    ActivitiesWaterSkiingExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesWaterSkiingExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesWaterSkiingExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesWaterSkiingExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesWaterSkiingExceptionEnum || (ActivitiesWaterSkiingExceptionEnum = {}));
export var ActivitiesWatercraftRentalExceptionEnum;
(function (ActivitiesWatercraftRentalExceptionEnum) {
    ActivitiesWatercraftRentalExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ActivitiesWatercraftRentalExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ActivitiesWatercraftRentalExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ActivitiesWatercraftRentalExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ActivitiesWatercraftRentalExceptionEnum || (ActivitiesWatercraftRentalExceptionEnum = {}));
// Activities
/**
 * Amenities and features related to leisure and play.
**/
var Activities = /** @class */ (function (_super) {
    __extends(Activities, _super);
    function Activities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beachAccess" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "beachAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beachAccessException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "beachAccessException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beachFront" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "beachFront", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beachFrontException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "beachFrontException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bicycleRental" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "bicycleRental", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bicycleRentalException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "bicycleRentalException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boutiqueStores" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "boutiqueStores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boutiqueStoresException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "boutiqueStoresException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=casino" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "casino", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=casinoException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "casinoException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeBicycleRental" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "freeBicycleRental", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeBicycleRentalException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "freeBicycleRentalException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeWatercraftRental" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "freeWatercraftRental", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeWatercraftRentalException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "freeWatercraftRentalException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gameRoom" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "gameRoom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gameRoomException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "gameRoomException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=golf" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "golf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=golfException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "golfException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horsebackRiding" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "horsebackRiding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horsebackRidingException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "horsebackRidingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nightclub" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "nightclub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nightclubException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "nightclubException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateBeach" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "privateBeach", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateBeachException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "privateBeachException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scuba" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "scuba", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scubaException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "scubaException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snorkeling" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "snorkeling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snorkelingException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "snorkelingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tennis" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "tennis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tennisException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "tennisException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSkiing" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "waterSkiing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waterSkiingException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "waterSkiingException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watercraftRental" }),
        __metadata("design:type", Boolean)
    ], Activities.prototype, "watercraftRental", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watercraftRentalException" }),
        __metadata("design:type", String)
    ], Activities.prototype, "watercraftRentalException", void 0);
    return Activities;
}(SpeakeasyBase));
export { Activities };
