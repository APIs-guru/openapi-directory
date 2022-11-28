import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigureSearchRequest
/** 
 * Request to configure the search parameters for the specified FHIR store.
**/
export class ConfigureSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonicalUrls" })
  canonicalUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
