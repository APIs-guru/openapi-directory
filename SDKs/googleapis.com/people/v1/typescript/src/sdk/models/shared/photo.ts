import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";



// Photo
/** 
 * A person's photo. A picture shown next to the person's name to help others recognize the person.
**/
export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
