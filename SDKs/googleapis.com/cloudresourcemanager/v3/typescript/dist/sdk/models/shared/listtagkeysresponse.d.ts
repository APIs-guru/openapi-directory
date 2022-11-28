import { SpeakeasyBase } from "../../../internal/utils";
import { TagKey } from "./tagkey";
/**
 * The ListTagKeys response message.
**/
export declare class ListTagKeysResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tagKeys?: TagKey[];
}
