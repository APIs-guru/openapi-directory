import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceInfo
/** 
 * Describes a resource referenced in the request.
**/
export class ResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=container" })
  container?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
