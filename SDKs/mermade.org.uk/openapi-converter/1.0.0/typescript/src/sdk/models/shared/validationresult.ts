import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=openapi" })
  openapi: string;
}
