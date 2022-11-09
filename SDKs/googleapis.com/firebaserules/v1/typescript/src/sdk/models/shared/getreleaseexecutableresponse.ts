import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReleaseExecutableResponseExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED"
,    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1"
,    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}

export enum GetReleaseExecutableResponseLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED"
,    FirebaseRules = "FIREBASE_RULES"
,    EventFlowTriggers = "EVENT_FLOW_TRIGGERS"
}


// GetReleaseExecutableResponse
/** 
 * The response for FirebaseRulesService.GetReleaseExecutable
**/
export class GetReleaseExecutableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executable" })
  executable?: string;

  @Metadata({ data: "json, name=executableVersion" })
  executableVersion?: GetReleaseExecutableResponseExecutableVersionEnum;

  @Metadata({ data: "json, name=language" })
  language?: GetReleaseExecutableResponseLanguageEnum;

  @Metadata({ data: "json, name=rulesetName" })
  rulesetName?: string;

  @Metadata({ data: "json, name=syncTime" })
  syncTime?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
