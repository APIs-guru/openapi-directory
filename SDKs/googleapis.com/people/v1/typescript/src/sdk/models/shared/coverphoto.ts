import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";



// CoverPhoto
/** 
 * A person's cover photo. A large image shown on the person's profile page that represents who they are or what they care about.
**/
export class CoverPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
