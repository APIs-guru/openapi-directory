import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScreenshotType } from "./screenshottype";



export class ScreenshotDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=defer_time" })
  deferTime?: number;

  @SpeakeasyMetadata({ data: "json, name=screenshots", elemType: ScreenshotType })
  screenshots?: ScreenshotType[];

  @SpeakeasyMetadata({ data: "json, name=test_id" })
  testId?: string;

  @SpeakeasyMetadata({ data: "json, name=test_status" })
  testStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
