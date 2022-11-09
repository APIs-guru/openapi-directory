import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ParkingElectricCarChargingStationsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingFreeParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingFreeSelfParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingFreeValetParkingExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingSelfParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ParkingValetParkingAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Parking
/** 
 * Parking options at the property.
**/
export class Parking extends SpeakeasyBase {
  @Metadata({ data: "json, name=electricCarChargingStations" })
  electricCarChargingStations?: boolean;

  @Metadata({ data: "json, name=electricCarChargingStationsException" })
  electricCarChargingStationsException?: ParkingElectricCarChargingStationsExceptionEnum;

  @Metadata({ data: "json, name=freeParking" })
  freeParking?: boolean;

  @Metadata({ data: "json, name=freeParkingException" })
  freeParkingException?: ParkingFreeParkingExceptionEnum;

  @Metadata({ data: "json, name=freeSelfParking" })
  freeSelfParking?: boolean;

  @Metadata({ data: "json, name=freeSelfParkingException" })
  freeSelfParkingException?: ParkingFreeSelfParkingExceptionEnum;

  @Metadata({ data: "json, name=freeValetParking" })
  freeValetParking?: boolean;

  @Metadata({ data: "json, name=freeValetParkingException" })
  freeValetParkingException?: ParkingFreeValetParkingExceptionEnum;

  @Metadata({ data: "json, name=parkingAvailable" })
  parkingAvailable?: boolean;

  @Metadata({ data: "json, name=parkingAvailableException" })
  parkingAvailableException?: ParkingParkingAvailableExceptionEnum;

  @Metadata({ data: "json, name=selfParkingAvailable" })
  selfParkingAvailable?: boolean;

  @Metadata({ data: "json, name=selfParkingAvailableException" })
  selfParkingAvailableException?: ParkingSelfParkingAvailableExceptionEnum;

  @Metadata({ data: "json, name=valetParkingAvailable" })
  valetParkingAvailable?: boolean;

  @Metadata({ data: "json, name=valetParkingAvailableException" })
  valetParkingAvailableException?: ParkingValetParkingAvailableExceptionEnum;
}
