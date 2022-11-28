import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ParkingElectricCarChargingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ParkingFreeParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ParkingFreeSelfParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ParkingFreeValetParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ParkingParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ParkingSelfParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ParkingValetParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Parking options at the property.
**/
export declare class Parking extends SpeakeasyBase {
    electricCarChargingStations?: boolean;
    electricCarChargingStationsException?: ParkingElectricCarChargingStationsExceptionEnum;
    freeParking?: boolean;
    freeParkingException?: ParkingFreeParkingExceptionEnum;
    freeSelfParking?: boolean;
    freeSelfParkingException?: ParkingFreeSelfParkingExceptionEnum;
    freeValetParking?: boolean;
    freeValetParkingException?: ParkingFreeValetParkingExceptionEnum;
    parkingAvailable?: boolean;
    parkingAvailableException?: ParkingParkingAvailableExceptionEnum;
    selfParkingAvailable?: boolean;
    selfParkingAvailableException?: ParkingSelfParkingAvailableExceptionEnum;
    valetParkingAvailable?: boolean;
    valetParkingAvailableException?: ParkingValetParkingAvailableExceptionEnum;
}
