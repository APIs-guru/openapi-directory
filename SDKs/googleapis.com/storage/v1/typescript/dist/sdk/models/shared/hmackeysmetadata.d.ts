import { SpeakeasyBase } from "../../../internal/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";
/**
 * A list of hmacKeys.
**/
export declare class HmacKeysMetadata extends SpeakeasyBase {
    items?: HmacKeyMetadata[];
    kind?: string;
    nextPageToken?: string;
}
