import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LanguageTargetingOptionDetails
/** 
 * Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export class LanguageTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
