import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsSource
/** 
 * The Google Cloud Storage location where the input will be read from.
**/
export class GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
