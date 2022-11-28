import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VersionedResource } from "./versionedresource";



// AttachedResource
/** 
 * Attached resource representation, which is defined by the corresponding service provider. It represents an attached resource's payload.
**/
export class AttachedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=versionedResources", elemType: VersionedResource })
  versionedResources?: VersionedResource[];
}
