import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigureSearchRequest
/** 
 * Request to configure the search parameters for the specified FHIR store.
**/
export class ConfigureSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonicalUrls" })
  canonicalUrls?: string[];

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
