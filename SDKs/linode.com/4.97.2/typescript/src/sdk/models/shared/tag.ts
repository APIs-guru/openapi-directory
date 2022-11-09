import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * A tag that has been applied to an object on your Account. Tags are currently for organizational purposes only.
 * 
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;
}
