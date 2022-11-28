import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchResourcesRequest
/** 
 * Request to search the resources in the specified FHIR store.
**/
export class SearchResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
