import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAttributes } from "./certificateattributes";



// EndpointVerificationSpecificAttributes
/** 
 * Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
**/
export class EndpointVerificationSpecificAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAttributes", elemType: CertificateAttributes })
  certificateAttributes?: CertificateAttributes[];
}
