import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceFileGcs } from "./ospolicyresourcefilegcs";
import { OsPolicyResourceFileRemote } from "./ospolicyresourcefileremote";


// OsPolicyResourceFile
/** 
 * A remote or local file.
**/
export class OsPolicyResourceFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowInsecure" })
  allowInsecure?: boolean;

  @Metadata({ data: "json, name=gcs" })
  gcs?: OsPolicyResourceFileGcs;

  @Metadata({ data: "json, name=localPath" })
  localPath?: string;

  @Metadata({ data: "json, name=remote" })
  remote?: OsPolicyResourceFileRemote;
}
