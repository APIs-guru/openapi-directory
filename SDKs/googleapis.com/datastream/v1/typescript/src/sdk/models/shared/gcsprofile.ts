import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsProfile
/** 
 * Cloud Storage bucket profile.
**/
export class GcsProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=rootPath" })
  rootPath?: string;
}
