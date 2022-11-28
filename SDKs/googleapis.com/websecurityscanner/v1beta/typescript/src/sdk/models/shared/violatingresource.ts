import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ViolatingResource
/** 
 * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
**/
export class ViolatingResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;
}
