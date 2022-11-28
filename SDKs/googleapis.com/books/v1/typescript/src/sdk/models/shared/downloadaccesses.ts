import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";



export class DownloadAccesses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadAccessList", elemType: DownloadAccessRestriction })
  downloadAccessList?: DownloadAccessRestriction[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
