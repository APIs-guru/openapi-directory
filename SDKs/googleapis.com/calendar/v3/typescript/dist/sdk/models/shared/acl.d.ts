import { SpeakeasyBase } from "../../../internal/utils";
import { AclRule } from "./aclrule";
export declare class Acl extends SpeakeasyBase {
    etag?: string;
    items?: AclRule[];
    kind?: string;
    nextPageToken?: string;
    nextSyncToken?: string;
}
