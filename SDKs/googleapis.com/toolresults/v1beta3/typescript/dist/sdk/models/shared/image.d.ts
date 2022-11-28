import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { ToolOutputReference } from "./tooloutputreference";
import { Thumbnail } from "./thumbnail";
/**
 * An image, with a link to the main image and a thumbnail.
**/
export declare class Image extends SpeakeasyBase {
    error?: Status;
    sourceImage?: ToolOutputReference;
    stepId?: string;
    thumbnail?: Thumbnail;
}
