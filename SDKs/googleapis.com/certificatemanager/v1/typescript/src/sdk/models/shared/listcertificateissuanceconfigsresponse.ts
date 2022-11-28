import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateIssuanceConfig } from "./certificateissuanceconfig";



// ListCertificateIssuanceConfigsResponse
/** 
 * Response for the `ListCertificateIssuanceConfigs` method.
**/
export class ListCertificateIssuanceConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateIssuanceConfigs", elemType: CertificateIssuanceConfig })
  certificateIssuanceConfigs?: CertificateIssuanceConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
