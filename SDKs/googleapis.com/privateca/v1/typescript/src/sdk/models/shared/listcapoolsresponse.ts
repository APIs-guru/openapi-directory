import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CaPool } from "./capool";


// ListCaPoolsResponse
/** 
 * Response message for CertificateAuthorityService.ListCaPools.
**/
export class ListCaPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=caPools", elemType: shared.CaPool })
  caPools?: CaPool[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
