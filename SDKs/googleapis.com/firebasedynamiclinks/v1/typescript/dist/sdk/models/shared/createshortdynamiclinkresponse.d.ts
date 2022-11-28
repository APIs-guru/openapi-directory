import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkWarning } from "./dynamiclinkwarning";
/**
 * Response to create a short Dynamic Link.
**/
export declare class CreateShortDynamicLinkResponse extends SpeakeasyBase {
    previewLink?: string;
    shortLink?: string;
    warning?: DynamicLinkWarning[];
}
