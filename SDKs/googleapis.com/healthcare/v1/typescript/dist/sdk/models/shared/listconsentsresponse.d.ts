import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
export declare class ListConsentsResponse extends SpeakeasyBase {
    consents?: Consent[];
    nextPageToken?: string;
}
