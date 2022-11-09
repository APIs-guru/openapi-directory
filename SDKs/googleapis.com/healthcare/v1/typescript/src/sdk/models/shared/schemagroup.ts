import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupOrSegment } from "./grouporsegment";


// SchemaGroup
/** 
 * An HL7v2 logical group construct.
**/
export class SchemaGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=choice" })
  choice?: boolean;

  @Metadata({ data: "json, name=maxOccurs" })
  maxOccurs?: number;

  @Metadata({ data: "json, name=members", elemType: shared.GroupOrSegment })
  members?: GroupOrSegment[];

  @Metadata({ data: "json, name=minOccurs" })
  minOccurs?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
