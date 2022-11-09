import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Photo
/** 
 * A person's photo.
**/
export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
