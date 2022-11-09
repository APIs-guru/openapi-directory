import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Locale
/** 
 * A person's locale preference.
**/
export class Locale extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
