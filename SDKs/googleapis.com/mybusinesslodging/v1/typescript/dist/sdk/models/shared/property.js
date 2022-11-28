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
export var PropertyBuiltYearExceptionEnum;
(function (PropertyBuiltYearExceptionEnum) {
    PropertyBuiltYearExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PropertyBuiltYearExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PropertyBuiltYearExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PropertyBuiltYearExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PropertyBuiltYearExceptionEnum || (PropertyBuiltYearExceptionEnum = {}));
export var PropertyFloorsCountExceptionEnum;
(function (PropertyFloorsCountExceptionEnum) {
    PropertyFloorsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PropertyFloorsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PropertyFloorsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PropertyFloorsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PropertyFloorsCountExceptionEnum || (PropertyFloorsCountExceptionEnum = {}));
export var PropertyLastRenovatedYearExceptionEnum;
(function (PropertyLastRenovatedYearExceptionEnum) {
    PropertyLastRenovatedYearExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PropertyLastRenovatedYearExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PropertyLastRenovatedYearExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PropertyLastRenovatedYearExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PropertyLastRenovatedYearExceptionEnum || (PropertyLastRenovatedYearExceptionEnum = {}));
export var PropertyRoomsCountExceptionEnum;
(function (PropertyRoomsCountExceptionEnum) {
    PropertyRoomsCountExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    PropertyRoomsCountExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    PropertyRoomsCountExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    PropertyRoomsCountExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(PropertyRoomsCountExceptionEnum || (PropertyRoomsCountExceptionEnum = {}));
// Property
/**
 * General factual information about the property's physical structure and important dates.
**/
var Property = /** @class */ (function (_super) {
    __extends(Property, _super);
    function Property() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtYear" }),
        __metadata("design:type", Number)
    ], Property.prototype, "builtYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtYearException" }),
        __metadata("design:type", String)
    ], Property.prototype, "builtYearException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorsCount" }),
        __metadata("design:type", Number)
    ], Property.prototype, "floorsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorsCountException" }),
        __metadata("design:type", String)
    ], Property.prototype, "floorsCountException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRenovatedYear" }),
        __metadata("design:type", Number)
    ], Property.prototype, "lastRenovatedYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRenovatedYearException" }),
        __metadata("design:type", String)
    ], Property.prototype, "lastRenovatedYearException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomsCount" }),
        __metadata("design:type", Number)
    ], Property.prototype, "roomsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomsCountException" }),
        __metadata("design:type", String)
    ], Property.prototype, "roomsCountException", void 0);
    return Property;
}(SpeakeasyBase));
export { Property };
