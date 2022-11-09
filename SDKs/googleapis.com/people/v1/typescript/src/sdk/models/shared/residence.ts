import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Residence
/** 
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
**/
export class Residence extends SpeakeasyBase {
  @Metadata({ data: "json, name=current" })
  current?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
