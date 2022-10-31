package shared




type GoogleAppsScriptTypeWebAppConfigAccessEnum string

const (
    GoogleAppsScriptTypeWebAppConfigAccessEnumUnknownAccess GoogleAppsScriptTypeWebAppConfigAccessEnum = "UNKNOWN_ACCESS"
GoogleAppsScriptTypeWebAppConfigAccessEnumMyself GoogleAppsScriptTypeWebAppConfigAccessEnum = "MYSELF"
GoogleAppsScriptTypeWebAppConfigAccessEnumDomain GoogleAppsScriptTypeWebAppConfigAccessEnum = "DOMAIN"
GoogleAppsScriptTypeWebAppConfigAccessEnumAnyone GoogleAppsScriptTypeWebAppConfigAccessEnum = "ANYONE"
GoogleAppsScriptTypeWebAppConfigAccessEnumAnyoneAnonymous GoogleAppsScriptTypeWebAppConfigAccessEnum = "ANYONE_ANONYMOUS"
)



type GoogleAppsScriptTypeWebAppConfigExecuteAsEnum string

const (
    GoogleAppsScriptTypeWebAppConfigExecuteAsEnumUnknownExecuteAs GoogleAppsScriptTypeWebAppConfigExecuteAsEnum = "UNKNOWN_EXECUTE_AS"
GoogleAppsScriptTypeWebAppConfigExecuteAsEnumUserAccessing GoogleAppsScriptTypeWebAppConfigExecuteAsEnum = "USER_ACCESSING"
GoogleAppsScriptTypeWebAppConfigExecuteAsEnumUserDeploying GoogleAppsScriptTypeWebAppConfigExecuteAsEnum = "USER_DEPLOYING"
)


type GoogleAppsScriptTypeWebAppConfig struct {
    Access *GoogleAppsScriptTypeWebAppConfigAccessEnum `json:"access,omitempty"`
    ExecuteAs *GoogleAppsScriptTypeWebAppConfigExecuteAsEnum `json:"executeAs,omitempty"`
    
}

