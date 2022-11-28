import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorUnauthorized extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_title" })
  errorTitle: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
