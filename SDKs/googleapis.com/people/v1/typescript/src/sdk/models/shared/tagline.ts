import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Tagline
/** 
 * **DEPRECATED**: No data will be returned A brief one-line description of the person.
**/
export class Tagline extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
