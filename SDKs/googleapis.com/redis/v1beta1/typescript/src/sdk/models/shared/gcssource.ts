import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsSource
/** 
 * The Cloud Storage location for the input content
**/
export class GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
