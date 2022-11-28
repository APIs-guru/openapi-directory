import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
