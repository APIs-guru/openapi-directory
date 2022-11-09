import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Gender
/** 
 * A person's gender.
**/
export class Gender extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressMeAs" })
  addressMeAs?: string;

  @Metadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
