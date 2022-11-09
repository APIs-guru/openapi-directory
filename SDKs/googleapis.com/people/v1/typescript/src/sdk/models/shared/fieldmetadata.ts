import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


// FieldMetadata
/** 
 * Metadata about a field.
**/
export class FieldMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=sourcePrimary" })
  sourcePrimary?: boolean;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}
