import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScreenshotType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity_id" })
  activityId?: string;

  @SpeakeasyMetadata({ data: "json, name=browser" })
  browser?: string;

  @SpeakeasyMetadata({ data: "json, name=browser_version" })
  browserVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=screenshot_url" })
  screenshotUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;
}
