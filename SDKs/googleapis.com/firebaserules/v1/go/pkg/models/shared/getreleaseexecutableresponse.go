package shared




type GetReleaseExecutableResponseExecutableVersionEnum string

const (
    GetReleaseExecutableResponseExecutableVersionEnumReleaseExecutableVersionUnspecified GetReleaseExecutableResponseExecutableVersionEnum = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED"
GetReleaseExecutableResponseExecutableVersionEnumFirebaseRulesExecutableV1 GetReleaseExecutableResponseExecutableVersionEnum = "FIREBASE_RULES_EXECUTABLE_V1"
GetReleaseExecutableResponseExecutableVersionEnumFirebaseRulesExecutableV2 GetReleaseExecutableResponseExecutableVersionEnum = "FIREBASE_RULES_EXECUTABLE_V2"
)



type GetReleaseExecutableResponseLanguageEnum string

const (
    GetReleaseExecutableResponseLanguageEnumLanguageUnspecified GetReleaseExecutableResponseLanguageEnum = "LANGUAGE_UNSPECIFIED"
GetReleaseExecutableResponseLanguageEnumFirebaseRules GetReleaseExecutableResponseLanguageEnum = "FIREBASE_RULES"
GetReleaseExecutableResponseLanguageEnumEventFlowTriggers GetReleaseExecutableResponseLanguageEnum = "EVENT_FLOW_TRIGGERS"
)


type GetReleaseExecutableResponse struct {
    Executable *string `json:"executable,omitempty"`
    ExecutableVersion *GetReleaseExecutableResponseExecutableVersionEnum `json:"executableVersion,omitempty"`
    Language *GetReleaseExecutableResponseLanguageEnum `json:"language,omitempty"`
    RulesetName *string `json:"rulesetName,omitempty"`
    SyncTime *string `json:"syncTime,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

