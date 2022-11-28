import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
/**
 * An image built by the pipeline.
**/
export declare class BuiltImage extends SpeakeasyBase {
    digest?: string;
    name?: string;
    pushTiming?: TimeSpan;
}
