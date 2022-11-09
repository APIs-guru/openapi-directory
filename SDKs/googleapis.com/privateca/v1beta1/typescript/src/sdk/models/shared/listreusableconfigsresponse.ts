import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReusableConfig } from "./reusableconfig";


// ListReusableConfigsResponse
/** 
 * Response message for CertificateAuthorityService.ListReusableConfigs.
**/
export class ListReusableConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reusableConfigs", elemType: shared.ReusableConfig })
  reusableConfigs?: ReusableConfig[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
