import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LanguageTargetingOptionDetails
/** 
 * Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.
**/
export class LanguageTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
