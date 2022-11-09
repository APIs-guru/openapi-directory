import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiveTvServiceInfo } from "./livetvserviceinfo";


export class LiveTvInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnabledUsers" })
  enabledUsers?: string[];

  @Metadata({ data: "json, name=IsEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=Services", elemType: shared.LiveTvServiceInfo })
  services?: LiveTvServiceInfo[];
}
