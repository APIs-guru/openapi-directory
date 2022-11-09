import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BackendRulePathTranslationEnum {
    PathTranslationUnspecified = "PATH_TRANSLATION_UNSPECIFIED"
,    ConstantAddress = "CONSTANT_ADDRESS"
,    AppendPathToAddress = "APPEND_PATH_TO_ADDRESS"
}


// BackendRule
/** 
 * A backend rule provides configuration for an individual API element.
**/
export class BackendRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=deadline" })
  deadline?: number;

  @Metadata({ data: "json, name=disableAuth" })
  disableAuth?: boolean;

  @Metadata({ data: "json, name=jwtAudience" })
  jwtAudience?: string;

  @Metadata({ data: "json, name=operationDeadline" })
  operationDeadline?: number;

  @Metadata({ data: "json, name=pathTranslation" })
  pathTranslation?: BackendRulePathTranslationEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}
