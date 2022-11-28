import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";



// Relation
/** 
 * A person's relation to another person.
**/
export class Relation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// RelationInput
/** 
 * A person's relation to another person.
**/
export class RelationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
