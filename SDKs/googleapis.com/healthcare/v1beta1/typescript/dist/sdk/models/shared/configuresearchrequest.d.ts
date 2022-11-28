import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to configure the search parameters for the specified FHIR store.
**/
export declare class ConfigureSearchRequest extends SpeakeasyBase {
    canonicalUrls?: string[];
    validateOnly?: boolean;
}
