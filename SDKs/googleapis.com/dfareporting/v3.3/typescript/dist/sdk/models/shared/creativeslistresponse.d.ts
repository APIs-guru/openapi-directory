import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * Creative List Response
**/
export declare class CreativesListResponse extends SpeakeasyBase {
    creatives?: Creative[];
    kind?: string;
    nextPageToken?: string;
}
