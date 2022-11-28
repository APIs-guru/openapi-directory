import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the link between a custom template and an entry on the Community Template Gallery site.
**/
export declare class GalleryReference extends SpeakeasyBase {
    host?: string;
    isModified?: boolean;
    owner?: string;
    repository?: string;
    signature?: string;
    version?: string;
}
