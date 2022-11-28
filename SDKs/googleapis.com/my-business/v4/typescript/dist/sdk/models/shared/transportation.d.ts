import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TransportationAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum TransportationCarRentalOnPropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum TransportationFreeAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum TransportationFreePrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum TransportationLocalShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum TransportationPrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum TransportationTransferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Vehicles or vehicular services facilitated or owned by the property.
**/
export declare class Transportation extends SpeakeasyBase {
    airportShuttle?: boolean;
    airportShuttleException?: TransportationAirportShuttleExceptionEnum;
    carRentalOnProperty?: boolean;
    carRentalOnPropertyException?: TransportationCarRentalOnPropertyExceptionEnum;
    freeAirportShuttle?: boolean;
    freeAirportShuttleException?: TransportationFreeAirportShuttleExceptionEnum;
    freePrivateCarService?: boolean;
    freePrivateCarServiceException?: TransportationFreePrivateCarServiceExceptionEnum;
    localShuttle?: boolean;
    localShuttleException?: TransportationLocalShuttleExceptionEnum;
    privateCarService?: boolean;
    privateCarServiceException?: TransportationPrivateCarServiceExceptionEnum;
    transfer?: boolean;
    transferException?: TransportationTransferExceptionEnum;
}
