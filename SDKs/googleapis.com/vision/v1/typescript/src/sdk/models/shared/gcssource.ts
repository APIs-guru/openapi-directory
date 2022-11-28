import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsSource
/** 
 * The Google Cloud Storage location where the input will be read from.
**/
export class GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
