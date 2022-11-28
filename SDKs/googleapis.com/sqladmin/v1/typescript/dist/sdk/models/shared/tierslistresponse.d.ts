import { SpeakeasyBase } from "../../../internal/utils";
import { Tier } from "./tier";
/**
 * Tiers list response.
**/
export declare class TiersListResponse extends SpeakeasyBase {
    items?: Tier[];
    kind?: string;
}
