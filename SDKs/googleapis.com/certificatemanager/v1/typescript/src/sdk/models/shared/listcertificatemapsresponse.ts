import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateMap } from "./certificatemap";


// ListCertificateMapsResponse
/** 
 * Response for the `ListCertificateMaps` method.
**/
export class ListCertificateMapsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateMaps", elemType: shared.CertificateMap })
  certificateMaps?: CertificateMap[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
