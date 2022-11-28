import { SpeakeasyBase } from "../../../internal/utils";
import { ChainName } from "./chainname";
import { ChainUri } from "./chainuri";
/**
 * A chain is a brand that your business's locations can be affiliated with.
**/
export declare class Chain extends SpeakeasyBase {
    chainNames?: ChainName[];
    locationCount?: number;
    name?: string;
    websites?: ChainUri[];
}
