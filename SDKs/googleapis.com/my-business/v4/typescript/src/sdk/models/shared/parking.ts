import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ParkingElectricCarChargingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingFreeParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingFreeSelfParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingFreeValetParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingSelfParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingValetParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Parking
/** 
 * Parking options at the property.
**/
export class Parking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=electricCarChargingStations" })
  electricCarChargingStations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=electricCarChargingStationsException" })
  electricCarChargingStationsException?: ParkingElectricCarChargingStationsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeParking" })
  freeParking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeParkingException" })
  freeParkingException?: ParkingFreeParkingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeSelfParking" })
  freeSelfParking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeSelfParkingException" })
  freeSelfParkingException?: ParkingFreeSelfParkingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeValetParking" })
  freeValetParking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeValetParkingException" })
  freeValetParkingException?: ParkingFreeValetParkingExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=parkingAvailable" })
  parkingAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parkingAvailableException" })
  parkingAvailableException?: ParkingParkingAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=selfParkingAvailable" })
  selfParkingAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selfParkingAvailableException" })
  selfParkingAvailableException?: ParkingSelfParkingAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=valetParkingAvailable" })
  valetParkingAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=valetParkingAvailableException" })
  valetParkingAvailableException?: ParkingValetParkingAvailableExceptionEnum;
}
