import { SpeakeasyBase } from "../../../internal/utils";
import { GalleryReference } from "./galleryreference";
/**
 * Represents a Google Tag Manager Custom Template's contents.
**/
export declare class CustomTemplate extends SpeakeasyBase {
    accountId?: string;
    containerId?: string;
    fingerprint?: string;
    galleryReference?: GalleryReference;
    name?: string;
    path?: string;
    tagManagerUrl?: string;
    templateData?: string;
    templateId?: string;
    workspaceId?: string;
}
