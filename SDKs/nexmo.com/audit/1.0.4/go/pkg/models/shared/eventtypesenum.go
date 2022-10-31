package shared

type EventTypesEnum string

const (
	EventTypesEnumUserStatus               EventTypesEnum = "USER_STATUS"
	EventTypesEnumUserUpdate               EventTypesEnum = "USER_UPDATE"
	EventTypesEnumUserBillingUpdate        EventTypesEnum = "USER_BILLING_UPDATE"
	EventTypesEnumUserCreate               EventTypesEnum = "USER_CREATE"
	EventTypesEnumUserLogin                EventTypesEnum = "USER_LOGIN"
	EventTypesEnumUserLogout               EventTypesEnum = "USER_LOGOUT"
	EventTypesEnumUserProductSearch        EventTypesEnum = "USER_PRODUCT_SEARCH"
	EventTypesEnumUserAPIKeysUpdate        EventTypesEnum = "USER_API_KEYS_UPDATE"
	EventTypesEnumAccountSecretDelete      EventTypesEnum = "ACCOUNT_SECRET_DELETE"
	EventTypesEnumAccountSecretCreate      EventTypesEnum = "ACCOUNT_SECRET_CREATE"
	EventTypesEnumAccountUpdateSpammer     EventTypesEnum = "ACCOUNT_UPDATE_SPAMMER"
	EventTypesEnumAccountUpdateSettingsAPI EventTypesEnum = "ACCOUNT_UPDATE_SETTINGS_API"
	EventTypesEnumNumberAssign             EventTypesEnum = "NUMBER_ASSIGN"
	EventTypesEnumNumberUpdated            EventTypesEnum = "NUMBER_UPDATED"
	EventTypesEnumNumberRelease            EventTypesEnum = "NUMBER_RELEASE"
	EventTypesEnumNumberLinked             EventTypesEnum = "NUMBER_LINKED"
	EventTypesEnumNumberUnlinked           EventTypesEnum = "NUMBER_UNLINKED"
	EventTypesEnumAppCreate                EventTypesEnum = "APP_CREATE"
	EventTypesEnumAppUpdate                EventTypesEnum = "APP_UPDATE"
	EventTypesEnumAppDelete                EventTypesEnum = "APP_DELETE"
	EventTypesEnumAppDisable               EventTypesEnum = "APP_DISABLE"
	EventTypesEnumAppEnable                EventTypesEnum = "APP_ENABLE"
	EventTypesEnumIPWhitelistCreate        EventTypesEnum = "IP_WHITELIST_CREATE"
	EventTypesEnumIPWhitelistDelete        EventTypesEnum = "IP_WHITELIST_DELETE"
	EventTypesEnumAutoreloadEnable         EventTypesEnum = "AUTORELOAD_ENABLE"
	EventTypesEnumAutoreloadUpdate         EventTypesEnum = "AUTORELOAD_UPDATE"
	EventTypesEnumAutoreloadDisable        EventTypesEnum = "AUTORELOAD_DISABLE"
)
