import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsProfile
/** 
 * Cloud Storage bucket profile.
**/
export class GcsProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=rootPath" })
  rootPath?: string;
}
