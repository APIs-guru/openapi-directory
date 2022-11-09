import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateIssuanceConfig } from "./certificateissuanceconfig";


// ListCertificateIssuanceConfigsResponse
/** 
 * Response for the `ListCertificateIssuanceConfigs` method.
**/
export class ListCertificateIssuanceConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateIssuanceConfigs", elemType: shared.CertificateIssuanceConfig })
  certificateIssuanceConfigs?: CertificateIssuanceConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
