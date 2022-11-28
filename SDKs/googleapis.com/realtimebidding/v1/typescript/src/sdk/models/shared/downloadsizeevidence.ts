import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlDownloadSize } from "./urldownloadsize";



// DownloadSizeEvidence
/** 
 * Total download size and URL-level download size breakdown for resources in a creative.
**/
export class DownloadSizeEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topUrlDownloadSizeBreakdowns", elemType: UrlDownloadSize })
  topUrlDownloadSizeBreakdowns?: UrlDownloadSize[];

  @SpeakeasyMetadata({ data: "json, name=totalDownloadSizeKb" })
  totalDownloadSizeKb?: number;
}
