import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TransportationAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationCarRentalOnPropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationFreeAirportShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationFreePrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationLocalShuttleExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationPrivateCarServiceExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum TransportationTransferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Transportation
/** 
 * Vehicles or vehicular services facilitated or owned by the property.
**/
export class Transportation extends SpeakeasyBase {
  @Metadata({ data: "json, name=airportShuttle" })
  airportShuttle?: boolean;

  @Metadata({ data: "json, name=airportShuttleException" })
  airportShuttleException?: TransportationAirportShuttleExceptionEnum;

  @Metadata({ data: "json, name=carRentalOnProperty" })
  carRentalOnProperty?: boolean;

  @Metadata({ data: "json, name=carRentalOnPropertyException" })
  carRentalOnPropertyException?: TransportationCarRentalOnPropertyExceptionEnum;

  @Metadata({ data: "json, name=freeAirportShuttle" })
  freeAirportShuttle?: boolean;

  @Metadata({ data: "json, name=freeAirportShuttleException" })
  freeAirportShuttleException?: TransportationFreeAirportShuttleExceptionEnum;

  @Metadata({ data: "json, name=freePrivateCarService" })
  freePrivateCarService?: boolean;

  @Metadata({ data: "json, name=freePrivateCarServiceException" })
  freePrivateCarServiceException?: TransportationFreePrivateCarServiceExceptionEnum;

  @Metadata({ data: "json, name=localShuttle" })
  localShuttle?: boolean;

  @Metadata({ data: "json, name=localShuttleException" })
  localShuttleException?: TransportationLocalShuttleExceptionEnum;

  @Metadata({ data: "json, name=privateCarService" })
  privateCarService?: boolean;

  @Metadata({ data: "json, name=privateCarServiceException" })
  privateCarServiceException?: TransportationPrivateCarServiceExceptionEnum;

  @Metadata({ data: "json, name=transfer" })
  transfer?: boolean;

  @Metadata({ data: "json, name=transferException" })
  transferException?: TransportationTransferExceptionEnum;
}
