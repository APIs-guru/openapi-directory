import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectStorageSslResponse
/** 
 * If this Object Storage bucket has a corresponding TLS/SSL Certificate.
 * 
**/
export class ObjectStorageSslResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;
}
