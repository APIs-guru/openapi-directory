import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Response object for creating a certificate.
**/
export declare class GoogleChromePolicyVersionsV1DefineCertificateResponse extends SpeakeasyBase {
    networkId?: string;
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    targetResource?: string;
}
