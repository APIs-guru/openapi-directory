import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PathSegment
/** 
 * Specifies the segment in a path to retrieve value from Struct.
**/
export class PathSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
