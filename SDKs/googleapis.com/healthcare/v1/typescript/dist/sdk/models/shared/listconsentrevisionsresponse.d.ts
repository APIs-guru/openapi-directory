import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
export declare class ListConsentRevisionsResponse extends SpeakeasyBase {
    consents?: Consent[];
    nextPageToken?: string;
}
