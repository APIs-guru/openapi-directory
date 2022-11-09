import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartScreenshotBadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
