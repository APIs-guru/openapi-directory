import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartScreenshotBadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
