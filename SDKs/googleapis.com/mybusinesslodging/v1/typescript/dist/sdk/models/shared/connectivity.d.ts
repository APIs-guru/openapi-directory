import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectivityFreeWifiExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ConnectivityPublicAreaWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ConnectivityPublicInternetTerminalExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ConnectivityWifiAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * The ways in which the property provides guests with the ability to access the internet.
**/
export declare class Connectivity extends SpeakeasyBase {
    freeWifi?: boolean;
    freeWifiException?: ConnectivityFreeWifiExceptionEnum;
    publicAreaWifiAvailable?: boolean;
    publicAreaWifiAvailableException?: ConnectivityPublicAreaWifiAvailableExceptionEnum;
    publicInternetTerminal?: boolean;
    publicInternetTerminalException?: ConnectivityPublicInternetTerminalExceptionEnum;
    wifiAvailable?: boolean;
    wifiAvailableException?: ConnectivityWifiAvailableExceptionEnum;
}
