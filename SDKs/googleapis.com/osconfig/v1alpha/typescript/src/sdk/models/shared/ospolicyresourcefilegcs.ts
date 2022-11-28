import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourceFileGcs
/** 
 * Specifies a file available as a Cloud Storage Object.
**/
export class OsPolicyResourceFileGcs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
