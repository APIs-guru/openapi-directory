import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaGroup } from "./schemagroup";
import { SchemaSegment } from "./schemasegment";



// GroupOrSegment
/** 
 * Construct representing a logical group or a segment.
**/
export class GroupOrSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: SchemaGroup;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: SchemaSegment;
}
