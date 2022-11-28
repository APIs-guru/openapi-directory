import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
