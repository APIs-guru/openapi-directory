import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchResourcesRequest
/** 
 * Request to search the resources in the specified FHIR store.
**/
export class SearchResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
