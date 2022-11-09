import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TagValue } from "./tagvalue";
/**
 * The ListTagValues response.
**/
export declare class ListTagValuesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tagValues?: TagValue[];
}
