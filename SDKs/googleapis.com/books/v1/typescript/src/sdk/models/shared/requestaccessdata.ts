import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConcurrentAccessRestriction } from "./concurrentaccessrestriction";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";


export class RequestAccessData extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentAccess" })
  concurrentAccess?: ConcurrentAccessRestriction;

  @Metadata({ data: "json, name=downloadAccess" })
  downloadAccess?: DownloadAccessRestriction;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
