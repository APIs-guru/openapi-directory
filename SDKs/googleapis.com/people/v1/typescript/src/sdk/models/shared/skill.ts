import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Skill
/** 
 * A skill that the person has.
**/
export class Skill extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
