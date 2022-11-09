import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FieldViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;
}
