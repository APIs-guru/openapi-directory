package shared

type ConnectivityFreeWifiExceptionEnum string

const (
	ConnectivityFreeWifiExceptionEnumExceptionUnspecified ConnectivityFreeWifiExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ConnectivityFreeWifiExceptionEnumUnderConstruction    ConnectivityFreeWifiExceptionEnum = "UNDER_CONSTRUCTION"
	ConnectivityFreeWifiExceptionEnumDependentOnSeason    ConnectivityFreeWifiExceptionEnum = "DEPENDENT_ON_SEASON"
	ConnectivityFreeWifiExceptionEnumDependentOnDayOfWeek ConnectivityFreeWifiExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ConnectivityPublicAreaWifiAvailableExceptionEnum string

const (
	ConnectivityPublicAreaWifiAvailableExceptionEnumExceptionUnspecified ConnectivityPublicAreaWifiAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ConnectivityPublicAreaWifiAvailableExceptionEnumUnderConstruction    ConnectivityPublicAreaWifiAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	ConnectivityPublicAreaWifiAvailableExceptionEnumDependentOnSeason    ConnectivityPublicAreaWifiAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	ConnectivityPublicAreaWifiAvailableExceptionEnumDependentOnDayOfWeek ConnectivityPublicAreaWifiAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ConnectivityPublicInternetTerminalExceptionEnum string

const (
	ConnectivityPublicInternetTerminalExceptionEnumExceptionUnspecified ConnectivityPublicInternetTerminalExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ConnectivityPublicInternetTerminalExceptionEnumUnderConstruction    ConnectivityPublicInternetTerminalExceptionEnum = "UNDER_CONSTRUCTION"
	ConnectivityPublicInternetTerminalExceptionEnumDependentOnSeason    ConnectivityPublicInternetTerminalExceptionEnum = "DEPENDENT_ON_SEASON"
	ConnectivityPublicInternetTerminalExceptionEnumDependentOnDayOfWeek ConnectivityPublicInternetTerminalExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ConnectivityWifiAvailableExceptionEnum string

const (
	ConnectivityWifiAvailableExceptionEnumExceptionUnspecified ConnectivityWifiAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ConnectivityWifiAvailableExceptionEnumUnderConstruction    ConnectivityWifiAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	ConnectivityWifiAvailableExceptionEnumDependentOnSeason    ConnectivityWifiAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	ConnectivityWifiAvailableExceptionEnumDependentOnDayOfWeek ConnectivityWifiAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type Connectivity struct {
	FreeWifi                         *bool                                             `json:"freeWifi"`
	FreeWifiException                *ConnectivityFreeWifiExceptionEnum                `json:"freeWifiException"`
	PublicAreaWifiAvailable          *bool                                             `json:"publicAreaWifiAvailable"`
	PublicAreaWifiAvailableException *ConnectivityPublicAreaWifiAvailableExceptionEnum `json:"publicAreaWifiAvailableException"`
	PublicInternetTerminal           *bool                                             `json:"publicInternetTerminal"`
	PublicInternetTerminalException  *ConnectivityPublicInternetTerminalExceptionEnum  `json:"publicInternetTerminalException"`
	WifiAvailable                    *bool                                             `json:"wifiAvailable"`
	WifiAvailableException           *ConnectivityWifiAvailableExceptionEnum           `json:"wifiAvailableException"`
}
