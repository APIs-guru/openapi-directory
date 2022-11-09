import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConnectivityFreeWifiExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ConnectivityPublicAreaWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ConnectivityPublicInternetTerminalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ConnectivityWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Connectivity
/** 
 * The ways in which the property provides guests with the ability to access the internet.
**/
export class Connectivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeWifi" })
  freeWifi?: boolean;

  @Metadata({ data: "json, name=freeWifiException" })
  freeWifiException?: ConnectivityFreeWifiExceptionEnum;

  @Metadata({ data: "json, name=publicAreaWifiAvailable" })
  publicAreaWifiAvailable?: boolean;

  @Metadata({ data: "json, name=publicAreaWifiAvailableException" })
  publicAreaWifiAvailableException?: ConnectivityPublicAreaWifiAvailableExceptionEnum;

  @Metadata({ data: "json, name=publicInternetTerminal" })
  publicInternetTerminal?: boolean;

  @Metadata({ data: "json, name=publicInternetTerminalException" })
  publicInternetTerminalException?: ConnectivityPublicInternetTerminalExceptionEnum;

  @Metadata({ data: "json, name=wifiAvailable" })
  wifiAvailable?: boolean;

  @Metadata({ data: "json, name=wifiAvailableException" })
  wifiAvailableException?: ConnectivityWifiAvailableExceptionEnum;
}
