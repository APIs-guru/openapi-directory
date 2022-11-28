import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
**/
export declare class Subject extends SpeakeasyBase {
    countryCode?: string;
    locality?: string;
    organization?: string;
    organizationalUnit?: string;
    postalCode?: string;
    province?: string;
    streetAddress?: string;
}
