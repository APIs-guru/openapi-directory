import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConsentStore
/** 
 * Represents a consent store.
**/
export class ConsentStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultConsentTtl" })
  defaultConsentTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=enableConsentCreateOnUpdate" })
  enableConsentCreateOnUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
