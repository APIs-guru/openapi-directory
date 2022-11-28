import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartTalkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}
