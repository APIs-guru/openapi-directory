import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VersionedResource } from "./versionedresource";


// AttachedResource
/** 
 * Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload.
**/
export class AttachedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=versionedResources", elemType: shared.VersionedResource })
  versionedResources?: VersionedResource[];
}
