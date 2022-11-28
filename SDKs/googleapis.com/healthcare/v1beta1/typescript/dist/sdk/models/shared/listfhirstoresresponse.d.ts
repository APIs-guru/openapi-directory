import { SpeakeasyBase } from "../../../internal/utils";
import { FhirStore } from "./fhirstore";
/**
 * Lists the FHIR stores in the given dataset.
**/
export declare class ListFhirStoresResponse extends SpeakeasyBase {
    fhirStores?: FhirStore[];
    nextPageToken?: string;
}
