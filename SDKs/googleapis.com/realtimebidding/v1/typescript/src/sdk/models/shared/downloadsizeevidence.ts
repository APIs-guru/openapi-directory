import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UrlDownloadSize } from "./urldownloadsize";


// DownloadSizeEvidence
/** 
 * Total download size and URL-level download size breakdown for resources in a creative.
**/
export class DownloadSizeEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=topUrlDownloadSizeBreakdowns", elemType: shared.UrlDownloadSize })
  topUrlDownloadSizeBreakdowns?: UrlDownloadSize[];

  @Metadata({ data: "json, name=totalDownloadSizeKb" })
  totalDownloadSizeKb?: number;
}
