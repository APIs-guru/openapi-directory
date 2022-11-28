import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReusableConfig } from "./reusableconfig";



// ListReusableConfigsResponse
/** 
 * Response message for CertificateAuthorityService.ListReusableConfigs.
**/
export class ListReusableConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reusableConfigs", elemType: ReusableConfig })
  reusableConfigs?: ReusableConfig[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
