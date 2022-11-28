import { SpeakeasyBase } from "../../../internal/utils";
import { PersonLookupInfo } from "./personlookupinfo";
export declare class PersonLookupInfoRemoteSearchQuery extends SpeakeasyBase {
    includeDisabledProviders?: boolean;
    itemId?: string;
    searchInfo?: PersonLookupInfo;
    searchProviderName?: string;
}
