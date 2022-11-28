import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConcurrentAccessRestriction } from "./concurrentaccessrestriction";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";



export class RequestAccessData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrentAccess" })
  concurrentAccess?: ConcurrentAccessRestriction;

  @SpeakeasyMetadata({ data: "json, name=downloadAccess" })
  downloadAccess?: DownloadAccessRestriction;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
