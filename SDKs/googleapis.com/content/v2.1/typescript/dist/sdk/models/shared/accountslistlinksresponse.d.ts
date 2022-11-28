import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedAccount } from "./linkedaccount";
export declare class AccountsListLinksResponse extends SpeakeasyBase {
    kind?: string;
    links?: LinkedAccount[];
    nextPageToken?: string;
}
