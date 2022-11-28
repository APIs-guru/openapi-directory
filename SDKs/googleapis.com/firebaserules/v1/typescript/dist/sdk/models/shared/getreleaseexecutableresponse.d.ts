import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReleaseExecutableResponseExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1",
    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}
export declare enum GetReleaseExecutableResponseLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED",
    FirebaseRules = "FIREBASE_RULES",
    EventFlowTriggers = "EVENT_FLOW_TRIGGERS"
}
/**
 * The response for FirebaseRulesService.GetReleaseExecutable
**/
export declare class GetReleaseExecutableResponse extends SpeakeasyBase {
    executable?: string;
    executableVersion?: GetReleaseExecutableResponseExecutableVersionEnum;
    language?: GetReleaseExecutableResponseLanguageEnum;
    rulesetName?: string;
    syncTime?: string;
    updateTime?: string;
}
