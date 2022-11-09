import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhotoId
/** 
 * Identifier for a Photo.
**/
export class PhotoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
