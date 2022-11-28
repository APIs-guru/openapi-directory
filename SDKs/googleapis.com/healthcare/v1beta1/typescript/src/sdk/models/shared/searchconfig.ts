import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchParameter } from "./searchparameter";



// SearchConfig
/** 
 * Contains the configuration for FHIR search.
**/
export class SearchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=searchParameters", elemType: SearchParameter })
  searchParameters?: SearchParameter[];
}
