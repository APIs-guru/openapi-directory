import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// PhoneNumber
/** 
 * A person's phone number.
**/
export class PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonicalForm" })
  canonicalForm?: string;

  @Metadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
