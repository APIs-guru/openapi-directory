import { SpeakeasyBase } from "../../../internal/utils";
import { VersionedResource } from "./versionedresource";
/**
 * Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload.
**/
export declare class AttachedResource extends SpeakeasyBase {
    assetType?: string;
    versionedResources?: VersionedResource[];
}
