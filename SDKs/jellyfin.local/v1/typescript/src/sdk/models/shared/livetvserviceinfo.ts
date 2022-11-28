import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveTvServiceStatusEnum } from "./livetvservicestatusenum";



// LiveTvServiceInfo
/** 
 * Class ServiceInfo.
**/
export class LiveTvServiceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HasUpdateAvailable" })
  hasUpdateAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HomePageUrl" })
  homePageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=IsVisible" })
  isVisible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: LiveTvServiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Tuners" })
  tuners?: string[];

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
