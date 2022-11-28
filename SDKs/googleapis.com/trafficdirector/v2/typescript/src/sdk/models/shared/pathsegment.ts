import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PathSegment
/** 
 * Specifies the segment in a path to retrieve value from Struct.
**/
export class PathSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
