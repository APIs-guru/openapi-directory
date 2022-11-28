import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaPool } from "./capool";



// ListCaPoolsResponse
/** 
 * Response message for CertificateAuthorityService.ListCaPools.
**/
export class ListCaPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caPools", elemType: CaPool })
  caPools?: CaPool[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
