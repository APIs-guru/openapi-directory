import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourceFileGcs
/** 
 * Specifies a file available as a Cloud Storage Object.
**/
export class OsPolicyResourceFileGcs extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
