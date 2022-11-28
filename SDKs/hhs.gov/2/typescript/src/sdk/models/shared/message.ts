import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorDetail" })
  errorDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=userMessage" })
  userMessage?: string;
}
