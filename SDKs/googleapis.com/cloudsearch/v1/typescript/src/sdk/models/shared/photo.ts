import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Photo
/** 
 * A person's photo.
**/
export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
