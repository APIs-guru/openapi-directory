import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";



// BirthdayInput
/** 
 * A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
**/
export class BirthdayInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


// Birthday
/** 
 * A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.
**/
export class Birthday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
