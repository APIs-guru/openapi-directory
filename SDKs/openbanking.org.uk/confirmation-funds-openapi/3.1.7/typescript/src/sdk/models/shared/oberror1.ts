import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ObError1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
