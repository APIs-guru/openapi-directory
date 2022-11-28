import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
export declare class ListCreativesResponse extends SpeakeasyBase {
    creatives?: Creative[];
    nextPageToken?: string;
}
