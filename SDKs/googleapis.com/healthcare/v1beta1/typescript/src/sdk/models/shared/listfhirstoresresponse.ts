import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirStore } from "./fhirstore";



// ListFhirStoresResponse
/** 
 * Lists the FHIR stores in the given dataset.
**/
export class ListFhirStoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fhirStores", elemType: FhirStore })
  fhirStores?: FhirStore[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
