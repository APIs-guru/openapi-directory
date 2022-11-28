import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedResource } from "./attachedresource";
import { RelatedResources } from "./relatedresources";
import { VersionedResource } from "./versionedresource";



// ResourceSearchResult
/** 
 * A result of Resource Search, containing information of a cloud resource. Next ID: 31
**/
export class ResourceSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=attachedResources", elemType: AttachedResource })
  attachedResources?: AttachedResource[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders?: string[];

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeys" })
  kmsKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=parentAssetType" })
  parentAssetType?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFullResourceName" })
  parentFullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships", elemType: RelatedResources })
  relationships?: Map<string, RelatedResources>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=tagKeys" })
  tagKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=tagValueIds" })
  tagValueIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tagValues" })
  tagValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionedResources", elemType: VersionedResource })
  versionedResources?: VersionedResource[];
}
