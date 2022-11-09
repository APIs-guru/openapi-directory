import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Relation
/** 
 * A person's relation to another person.
**/
export class Relation extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=person" })
  person?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
