import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConsentStore
/** 
 * Represents a consent store.
**/
export class ConsentStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultConsentTtl" })
  defaultConsentTtl?: string;

  @Metadata({ data: "json, name=enableConsentCreateOnUpdate" })
  enableConsentCreateOnUpdate?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
