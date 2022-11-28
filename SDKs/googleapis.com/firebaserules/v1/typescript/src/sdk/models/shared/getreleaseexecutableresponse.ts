import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReleaseExecutableResponseExecutableVersionEnum {
    ReleaseExecutableVersionUnspecified = "RELEASE_EXECUTABLE_VERSION_UNSPECIFIED",
    FirebaseRulesExecutableV1 = "FIREBASE_RULES_EXECUTABLE_V1",
    FirebaseRulesExecutableV2 = "FIREBASE_RULES_EXECUTABLE_V2"
}

export enum GetReleaseExecutableResponseLanguageEnum {
    LanguageUnspecified = "LANGUAGE_UNSPECIFIED",
    FirebaseRules = "FIREBASE_RULES",
    EventFlowTriggers = "EVENT_FLOW_TRIGGERS"
}


// GetReleaseExecutableResponse
/** 
 * The response for FirebaseRulesService.GetReleaseExecutable
**/
export class GetReleaseExecutableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executable" })
  executable?: string;

  @SpeakeasyMetadata({ data: "json, name=executableVersion" })
  executableVersion?: GetReleaseExecutableResponseExecutableVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: GetReleaseExecutableResponseLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=rulesetName" })
  rulesetName?: string;

  @SpeakeasyMetadata({ data: "json, name=syncTime" })
  syncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
