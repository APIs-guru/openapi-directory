import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsSource
/** 
 * Specifies the configuration for importing data from Cloud Storage.
**/
export class GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
