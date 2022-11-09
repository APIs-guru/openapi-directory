import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicAuth } from "./basicauth";
import { ServiceAccount } from "./serviceaccount";
/**
 * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
**/
export declare class Credential extends SpeakeasyBase {
    basicAuth?: BasicAuth;
    serviceAccount?: ServiceAccount;
    useProjectDefault?: boolean;
}
