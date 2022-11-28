import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TransportationAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationCarRentalOnPropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationFreeAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationFreePrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationLocalShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationPrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationTransferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Transportation
/** 
 * Vehicles or vehicular services facilitated or owned by the property.
**/
export class Transportation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airportShuttle" })
  airportShuttle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=airportShuttleException" })
  airportShuttleException?: TransportationAirportShuttleExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=carRentalOnProperty" })
  carRentalOnProperty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=carRentalOnPropertyException" })
  carRentalOnPropertyException?: TransportationCarRentalOnPropertyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freeAirportShuttle" })
  freeAirportShuttle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeAirportShuttleException" })
  freeAirportShuttleException?: TransportationFreeAirportShuttleExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=freePrivateCarService" })
  freePrivateCarService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freePrivateCarServiceException" })
  freePrivateCarServiceException?: TransportationFreePrivateCarServiceExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=localShuttle" })
  localShuttle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=localShuttleException" })
  localShuttleException?: TransportationLocalShuttleExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=privateCarService" })
  privateCarService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateCarServiceException" })
  privateCarServiceException?: TransportationPrivateCarServiceExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=transfer" })
  transfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transferException" })
  transferException?: TransportationTransferExceptionEnum;
}
