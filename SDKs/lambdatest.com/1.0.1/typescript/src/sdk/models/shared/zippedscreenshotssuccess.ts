import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ZippedScreenshotsSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
