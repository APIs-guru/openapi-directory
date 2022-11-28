import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceInfo
/** 
 * Describes a resource associated with this operation.
**/
export class ResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceContainer" })
  resourceContainer?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceLocation" })
  resourceLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
