import { SpeakeasyBase } from "../../../internal/utils";
import { AccountIdentifier } from "./accountidentifier";
export declare class AccountsAuthInfoResponse extends SpeakeasyBase {
    accountIdentifiers?: AccountIdentifier[];
    kind?: string;
}
