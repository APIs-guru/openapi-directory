import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadItemRef
/** 
 * Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.
**/
export class UploadItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
