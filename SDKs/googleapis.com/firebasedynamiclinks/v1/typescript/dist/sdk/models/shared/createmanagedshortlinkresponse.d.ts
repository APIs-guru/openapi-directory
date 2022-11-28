import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedShortLink } from "./managedshortlink";
import { DynamicLinkWarning } from "./dynamiclinkwarning";
/**
 * Response to create a short Dynamic Link.
**/
export declare class CreateManagedShortLinkResponse extends SpeakeasyBase {
    managedShortLink?: ManagedShortLink;
    previewLink?: string;
    warning?: DynamicLinkWarning[];
}
