import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScreenshotType extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity_id" })
  activityId?: string;

  @Metadata({ data: "json, name=browser" })
  browser?: string;

  @Metadata({ data: "json, name=browser_version" })
  browserVersion?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=screenshot_url" })
  screenshotUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;
}
