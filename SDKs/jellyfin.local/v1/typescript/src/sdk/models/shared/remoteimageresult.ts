import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemoteImageInfo } from "./remoteimageinfo";


// RemoteImageResult
/** 
 * Class RemoteImageResult.
**/
export class RemoteImageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Images", elemType: shared.RemoteImageInfo })
  images?: RemoteImageInfo[];

  @Metadata({ data: "json, name=Providers" })
  providers?: string[];

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
