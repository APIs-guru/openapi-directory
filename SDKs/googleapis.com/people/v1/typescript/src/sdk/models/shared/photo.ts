import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Photo
/** 
 * A person's photo. A picture shown next to the person's name to help others recognize the person.
**/
export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
