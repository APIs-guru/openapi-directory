import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachedResource } from "./attachedresource";
import { RelatedResources } from "./relatedresources";
import { VersionedResource } from "./versionedresource";


// ResourceSearchResult
/** 
 * A result of Resource Search, containing information of a cloud resource. Next ID: 31
**/
export class ResourceSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAttributes" })
  additionalAttributes?: Map<string, any>;

  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=attachedResources", elemType: shared.AttachedResource })
  attachedResources?: AttachedResource[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=folders" })
  folders?: string[];

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=kmsKeys" })
  kmsKeys?: string[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=parentAssetType" })
  parentAssetType?: string;

  @Metadata({ data: "json, name=parentFullResourceName" })
  parentFullResourceName?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=relationships", elemType: shared.RelatedResources })
  relationships?: Map<string, RelatedResources>;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=tagKeys" })
  tagKeys?: string[];

  @Metadata({ data: "json, name=tagValueIds" })
  tagValueIds?: string[];

  @Metadata({ data: "json, name=tagValues" })
  tagValues?: string[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=versionedResources", elemType: shared.VersionedResource })
  versionedResources?: VersionedResource[];
}
