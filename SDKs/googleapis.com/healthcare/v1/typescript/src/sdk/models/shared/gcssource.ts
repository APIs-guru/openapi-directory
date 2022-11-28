import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsSource
/** 
 * Specifies the configuration for importing data from Cloud Storage.
**/
export class GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
