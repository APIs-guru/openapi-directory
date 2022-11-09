import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FhirStore } from "./fhirstore";


// ListFhirStoresResponse
/** 
 * Lists the FHIR stores in the given dataset.
**/
export class ListFhirStoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fhirStores", elemType: shared.FhirStore })
  fhirStores?: FhirStore[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
