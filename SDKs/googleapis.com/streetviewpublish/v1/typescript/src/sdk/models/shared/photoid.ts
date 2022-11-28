import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhotoId
/** 
 * Identifier for a Photo.
**/
export class PhotoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
