import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaGroup } from "./schemagroup";
import { SchemaSegment } from "./schemasegment";


// GroupOrSegment
/** 
 * Construct representing a logical group or a segment.
**/
export class GroupOrSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: SchemaGroup;

  @Metadata({ data: "json, name=segment" })
  segment?: SchemaSegment;
}
