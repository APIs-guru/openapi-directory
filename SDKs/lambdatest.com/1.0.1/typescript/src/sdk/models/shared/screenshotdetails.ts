import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScreenshotType } from "./screenshottype";


export class ScreenshotDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=defer_time" })
  deferTime?: number;

  @Metadata({ data: "json, name=screenshots", elemType: shared.ScreenshotType })
  screenshots?: ScreenshotType[];

  @Metadata({ data: "json, name=test_id" })
  testId?: string;

  @Metadata({ data: "json, name=test_status" })
  testStatus?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
