import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectStorageSslResponse
/** 
 * If this Object Storage bucket has a corresponding TLS/SSL Certificate.
 * 
**/
export class ObjectStorageSslResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssl" })
  ssl?: boolean;
}
