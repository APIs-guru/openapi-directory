import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BackendRulePathTranslationEnum {
    PathTranslationUnspecified = "PATH_TRANSLATION_UNSPECIFIED",
    ConstantAddress = "CONSTANT_ADDRESS",
    AppendPathToAddress = "APPEND_PATH_TO_ADDRESS"
}


// BackendRule
/** 
 * A backend rule provides configuration for an individual API element.
**/
export class BackendRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=deadline" })
  deadline?: number;

  @SpeakeasyMetadata({ data: "json, name=disableAuth" })
  disableAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jwtAudience" })
  jwtAudience?: string;

  @SpeakeasyMetadata({ data: "json, name=operationDeadline" })
  operationDeadline?: number;

  @SpeakeasyMetadata({ data: "json, name=pathTranslation" })
  pathTranslation?: BackendRulePathTranslationEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}
