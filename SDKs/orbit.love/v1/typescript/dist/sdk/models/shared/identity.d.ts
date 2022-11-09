import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents an email address, a profile on networks like github and twitter, or a record in another system.
**/
export declare class Identity extends SpeakeasyBase {
    email?: string;
    name?: string;
    source: string;
    sourceHost?: string;
    uid?: string;
    url?: string;
    username?: string;
}
