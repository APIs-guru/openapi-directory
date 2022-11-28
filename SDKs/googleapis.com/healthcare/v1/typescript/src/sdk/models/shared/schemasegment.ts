import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaSegment
/** 
 * An HL7v2 Segment.
**/
export class SchemaSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxOccurs" })
  maxOccurs?: number;

  @SpeakeasyMetadata({ data: "json, name=minOccurs" })
  minOccurs?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
