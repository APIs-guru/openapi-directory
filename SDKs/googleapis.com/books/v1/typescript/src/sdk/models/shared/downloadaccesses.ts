import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";


export class DownloadAccesses extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadAccessList", elemType: shared.DownloadAccessRestriction })
  downloadAccessList?: DownloadAccessRestriction[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
