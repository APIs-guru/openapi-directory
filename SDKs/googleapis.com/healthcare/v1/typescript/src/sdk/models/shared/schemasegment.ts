import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchemaSegment
/** 
 * An HL7v2 Segment.
**/
export class SchemaSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxOccurs" })
  maxOccurs?: number;

  @Metadata({ data: "json, name=minOccurs" })
  minOccurs?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
