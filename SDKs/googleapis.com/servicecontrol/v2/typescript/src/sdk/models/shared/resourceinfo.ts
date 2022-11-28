import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceInfo
/** 
 * Describes a resource referenced in the request.
**/
export class ResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
