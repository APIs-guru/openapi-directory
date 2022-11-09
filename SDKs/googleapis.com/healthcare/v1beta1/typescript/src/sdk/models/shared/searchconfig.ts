import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchParameter } from "./searchparameter";


// SearchConfig
/** 
 * Contains the configuration for FHIR search.
**/
export class SearchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=searchParameters", elemType: shared.SearchParameter })
  searchParameters?: SearchParameter[];
}
