import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";



// RelationshipInterest
/** 
 * **DEPRECATED**: No data will be returned A person's relationship interest .
**/
export class RelationshipInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
