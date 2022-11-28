import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectivityFreeWifiExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ConnectivityPublicAreaWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ConnectivityPublicInternetTerminalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum ConnectivityWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Connectivity
/** 
 * The ways in which the property provides guests with the ability to access the internet.
**/
export class Connectivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeWifi" })
  freeWifi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=freeWifiException" })
  freeWifiException?: ConnectivityFreeWifiExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=publicAreaWifiAvailable" })
  publicAreaWifiAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publicAreaWifiAvailableException" })
  publicAreaWifiAvailableException?: ConnectivityPublicAreaWifiAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=publicInternetTerminal" })
  publicInternetTerminal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publicInternetTerminalException" })
  publicInternetTerminalException?: ConnectivityPublicInternetTerminalExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=wifiAvailable" })
  wifiAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifiAvailableException" })
  wifiAvailableException?: ConnectivityWifiAvailableExceptionEnum;
}
