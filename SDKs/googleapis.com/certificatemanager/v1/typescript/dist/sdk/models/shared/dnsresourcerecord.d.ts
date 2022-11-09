import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
**/
export declare class DnsResourceRecord extends SpeakeasyBase {
    data?: string;
    name?: string;
    type?: string;
}
