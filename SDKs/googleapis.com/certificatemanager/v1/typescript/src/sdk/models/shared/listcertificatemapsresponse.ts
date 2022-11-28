import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateMap } from "./certificatemap";



// ListCertificateMapsResponse
/** 
 * Response for the `ListCertificateMaps` method.
**/
export class ListCertificateMapsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateMaps", elemType: CertificateMap })
  certificateMaps?: CertificateMap[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
