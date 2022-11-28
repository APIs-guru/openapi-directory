import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsProfile
/** 
 * Cloud Storage bucket profile.
**/
export class GcsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=rootPath" })
  rootPath?: string;
}
