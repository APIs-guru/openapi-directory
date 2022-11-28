import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";



// ListCertificatesResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificates.
**/
export class ListCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: Certificate })
  certificates?: Certificate[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
