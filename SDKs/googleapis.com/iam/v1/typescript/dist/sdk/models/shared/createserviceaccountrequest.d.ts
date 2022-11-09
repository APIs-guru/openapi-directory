import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccount } from "./serviceaccount";
/**
 * The service account create request.
**/
export declare class CreateServiceAccountRequest extends SpeakeasyBase {
    accountId?: string;
    serviceAccount?: ServiceAccount;
}
