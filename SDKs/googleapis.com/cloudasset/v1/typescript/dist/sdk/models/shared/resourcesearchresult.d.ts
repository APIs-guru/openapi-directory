import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedResource } from "./attachedresource";
import { RelatedResources } from "./relatedresources";
import { VersionedResource } from "./versionedresource";
/**
 * A result of Resource Search, containing information of a cloud resource. Next ID: 31
**/
export declare class ResourceSearchResult extends SpeakeasyBase {
    additionalAttributes?: Map<string, any>;
    assetType?: string;
    attachedResources?: AttachedResource[];
    createTime?: string;
    description?: string;
    displayName?: string;
    folders?: string[];
    kmsKey?: string;
    kmsKeys?: string[];
    labels?: Map<string, string>;
    location?: string;
    name?: string;
    networkTags?: string[];
    organization?: string;
    parentAssetType?: string;
    parentFullResourceName?: string;
    project?: string;
    relationships?: Map<string, RelatedResources>;
    state?: string;
    tagKeys?: string[];
    tagValueIds?: string[];
    tagValues?: string[];
    updateTime?: string;
    versionedResources?: VersionedResource[];
}
