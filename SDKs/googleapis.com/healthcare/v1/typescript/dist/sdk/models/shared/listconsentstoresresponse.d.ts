import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentStore } from "./consentstore";
export declare class ListConsentStoresResponse extends SpeakeasyBase {
    consentStores?: ConsentStore[];
    nextPageToken?: string;
}
