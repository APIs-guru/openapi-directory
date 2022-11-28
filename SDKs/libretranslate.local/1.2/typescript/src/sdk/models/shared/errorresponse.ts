import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: string;
}
