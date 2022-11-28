import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemoteImageInfo } from "./remoteimageinfo";



// RemoteImageResult
/** 
 * Class RemoteImageResult.
**/
export class RemoteImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images", elemType: RemoteImageInfo })
  images?: RemoteImageInfo[];

  @SpeakeasyMetadata({ data: "json, name=Providers" })
  providers?: string[];

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
