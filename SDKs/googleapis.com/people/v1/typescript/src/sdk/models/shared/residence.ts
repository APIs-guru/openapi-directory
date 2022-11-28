import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";



// Residence
/** 
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
**/
export class Residence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// ResidenceInput
/** 
 * **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
**/
export class ResidenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
