import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountInput } from "./serviceaccount";
/**
 * The service account create request.
**/
export declare class CreateServiceAccountRequestInput extends SpeakeasyBase {
    accountId?: string;
    serviceAccount?: ServiceAccountInput;
}
