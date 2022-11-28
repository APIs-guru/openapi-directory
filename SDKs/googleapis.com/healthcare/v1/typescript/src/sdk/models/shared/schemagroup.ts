import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupOrSegment } from "./grouporsegment";



// SchemaGroup
/** 
 * An HL7v2 logical group construct.
**/
export class SchemaGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choice" })
  choice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxOccurs" })
  maxOccurs?: number;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: GroupOrSegment })
  members?: GroupOrSegment[];

  @SpeakeasyMetadata({ data: "json, name=minOccurs" })
  minOccurs?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
