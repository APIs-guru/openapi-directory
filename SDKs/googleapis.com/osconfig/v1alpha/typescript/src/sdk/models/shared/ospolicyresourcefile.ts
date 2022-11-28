import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFileGcs } from "./ospolicyresourcefilegcs";
import { OsPolicyResourceFileRemote } from "./ospolicyresourcefileremote";



// OsPolicyResourceFile
/** 
 * A remote or local file.
**/
export class OsPolicyResourceFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowInsecure" })
  allowInsecure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gcs" })
  gcs?: OsPolicyResourceFileGcs;

  @SpeakeasyMetadata({ data: "json, name=localPath" })
  localPath?: string;

  @SpeakeasyMetadata({ data: "json, name=remote" })
  remote?: OsPolicyResourceFileRemote;
}
