import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FieldViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;
}
