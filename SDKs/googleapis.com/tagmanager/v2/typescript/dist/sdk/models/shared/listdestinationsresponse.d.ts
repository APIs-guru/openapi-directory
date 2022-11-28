import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
export declare class ListDestinationsResponse extends SpeakeasyBase {
    destination?: Destination[];
    nextPageToken?: string;
}
