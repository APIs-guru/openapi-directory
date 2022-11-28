import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
export declare class ProductSetInput extends SpeakeasyBase {
    displayName?: string;
    indexError?: Status;
    name?: string;
}
/**
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
export declare class ProductSet extends SpeakeasyBase {
    displayName?: string;
    indexError?: Status;
    indexTime?: string;
    name?: string;
}
