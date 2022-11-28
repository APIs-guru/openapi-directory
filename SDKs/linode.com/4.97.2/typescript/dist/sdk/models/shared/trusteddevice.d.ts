import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.
 *
**/
export declare class TrustedDevice extends SpeakeasyBase {
    created?: Date;
    expiry?: Date;
    id?: number;
    lastAuthenticated?: Date;
    lastRemoteAddr?: string;
    userAgent?: string;
}
