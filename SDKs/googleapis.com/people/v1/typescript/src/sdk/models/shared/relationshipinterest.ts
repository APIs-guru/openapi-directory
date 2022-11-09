import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// RelationshipInterest
/** 
 * **DEPRECATED**: No data will be returned A person's relationship interest .
**/
export class RelationshipInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
