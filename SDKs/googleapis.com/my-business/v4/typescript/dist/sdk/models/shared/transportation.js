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
export var TransportationAirportShuttleExceptionEnum;
(function (TransportationAirportShuttleExceptionEnum) {
    TransportationAirportShuttleExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationAirportShuttleExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationAirportShuttleExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationAirportShuttleExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationAirportShuttleExceptionEnum || (TransportationAirportShuttleExceptionEnum = {}));
export var TransportationCarRentalOnPropertyExceptionEnum;
(function (TransportationCarRentalOnPropertyExceptionEnum) {
    TransportationCarRentalOnPropertyExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationCarRentalOnPropertyExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationCarRentalOnPropertyExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationCarRentalOnPropertyExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationCarRentalOnPropertyExceptionEnum || (TransportationCarRentalOnPropertyExceptionEnum = {}));
export var TransportationFreeAirportShuttleExceptionEnum;
(function (TransportationFreeAirportShuttleExceptionEnum) {
    TransportationFreeAirportShuttleExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationFreeAirportShuttleExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationFreeAirportShuttleExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationFreeAirportShuttleExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationFreeAirportShuttleExceptionEnum || (TransportationFreeAirportShuttleExceptionEnum = {}));
export var TransportationFreePrivateCarServiceExceptionEnum;
(function (TransportationFreePrivateCarServiceExceptionEnum) {
    TransportationFreePrivateCarServiceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationFreePrivateCarServiceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationFreePrivateCarServiceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationFreePrivateCarServiceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationFreePrivateCarServiceExceptionEnum || (TransportationFreePrivateCarServiceExceptionEnum = {}));
export var TransportationLocalShuttleExceptionEnum;
(function (TransportationLocalShuttleExceptionEnum) {
    TransportationLocalShuttleExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationLocalShuttleExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationLocalShuttleExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationLocalShuttleExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationLocalShuttleExceptionEnum || (TransportationLocalShuttleExceptionEnum = {}));
export var TransportationPrivateCarServiceExceptionEnum;
(function (TransportationPrivateCarServiceExceptionEnum) {
    TransportationPrivateCarServiceExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationPrivateCarServiceExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationPrivateCarServiceExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationPrivateCarServiceExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationPrivateCarServiceExceptionEnum || (TransportationPrivateCarServiceExceptionEnum = {}));
export var TransportationTransferExceptionEnum;
(function (TransportationTransferExceptionEnum) {
    TransportationTransferExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    TransportationTransferExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    TransportationTransferExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    TransportationTransferExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(TransportationTransferExceptionEnum || (TransportationTransferExceptionEnum = {}));
// Transportation
/**
 * Vehicles or vehicular services facilitated or owned by the property.
**/
var Transportation = /** @class */ (function (_super) {
    __extends(Transportation, _super);
    function Transportation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=airportShuttle" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "airportShuttle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=airportShuttleException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "airportShuttleException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carRentalOnProperty" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "carRentalOnProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carRentalOnPropertyException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "carRentalOnPropertyException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeAirportShuttle" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "freeAirportShuttle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeAirportShuttleException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "freeAirportShuttleException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freePrivateCarService" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "freePrivateCarService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freePrivateCarServiceException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "freePrivateCarServiceException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localShuttle" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "localShuttle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localShuttleException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "localShuttleException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateCarService" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "privateCarService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateCarServiceException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "privateCarServiceException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer" }),
        __metadata("design:type", Boolean)
    ], Transportation.prototype, "transfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferException" }),
        __metadata("design:type", String)
    ], Transportation.prototype, "transferException", void 0);
    return Transportation;
}(SpeakeasyBase));
export { Transportation };
