import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
export declare class ListReleasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    releases?: Release[];
}
