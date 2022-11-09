import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchParameter
/** 
 * Contains the versioned name and the URL for one SearchParameter.
**/
export class SearchParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonicalUrl" })
  canonicalUrl?: string;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;
}
