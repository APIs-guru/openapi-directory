import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateAttributes } from "./certificateattributes";


// EndpointVerificationSpecificAttributes
/** 
 * Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
**/
export class EndpointVerificationSpecificAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAttributes", elemType: shared.CertificateAttributes })
  certificateAttributes?: CertificateAttributes[];
}
