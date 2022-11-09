import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiveTvServiceStatusEnum } from "./livetvservicestatusenum";


// LiveTvServiceInfo
/** 
 * Class ServiceInfo.
**/
export class LiveTvServiceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=HasUpdateAvailable" })
  hasUpdateAvailable?: boolean;

  @Metadata({ data: "json, name=HomePageUrl" })
  homePageUrl?: string;

  @Metadata({ data: "json, name=IsVisible" })
  isVisible?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: LiveTvServiceStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Tuners" })
  tuners?: string[];

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
