import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudStorageFile
/** 
 * The export file in Cloud Storage
**/
export class CloudStorageFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}
