import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAttributes } from "./certificateattributes";
/**
 * Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
**/
export declare class EndpointVerificationSpecificAttributes extends SpeakeasyBase {
    certificateAttributes?: CertificateAttributes[];
}
