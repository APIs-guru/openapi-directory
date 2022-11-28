import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudStorageFile
/** 
 * The export file in Cloud Storage
**/
export class CloudStorageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=md5Hash" })
  md5Hash?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}
