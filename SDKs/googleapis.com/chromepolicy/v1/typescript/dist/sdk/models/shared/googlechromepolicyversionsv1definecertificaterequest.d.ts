import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Request object for creating a certificate.
**/
export declare class GoogleChromePolicyVersionsV1DefineCertificateRequest extends SpeakeasyBase {
    ceritificateName?: string;
    certificate?: string;
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    targetResource?: string;
}
