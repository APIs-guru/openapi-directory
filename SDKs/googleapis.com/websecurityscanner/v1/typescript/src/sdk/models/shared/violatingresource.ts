import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ViolatingResource
/** 
 * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
**/
export class ViolatingResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;
}
