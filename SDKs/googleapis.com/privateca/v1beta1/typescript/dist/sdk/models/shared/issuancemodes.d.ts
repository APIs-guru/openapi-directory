import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CertificateAuthority.
**/
export declare class IssuanceModes extends SpeakeasyBase {
    allowConfigBasedIssuance?: boolean;
    allowCsrBasedIssuance?: boolean;
}
