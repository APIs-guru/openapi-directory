import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=openapi" })
  openapi: string;
}
