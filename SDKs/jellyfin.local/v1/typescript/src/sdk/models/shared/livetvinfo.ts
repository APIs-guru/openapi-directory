import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveTvServiceInfo } from "./livetvserviceinfo";



export class LiveTvInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnabledUsers" })
  enabledUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=IsEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: LiveTvServiceInfo })
  services?: LiveTvServiceInfo[];
}
