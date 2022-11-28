import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchParameter
/** 
 * Contains the versioned name and the URL for one SearchParameter.
**/
export class SearchParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonicalUrl" })
  canonicalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;
}
