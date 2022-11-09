import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceInfo
/** 
 * Describes a resource associated with this operation.
**/
export class ResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: string;

  @Metadata({ data: "json, name=resourceContainer" })
  resourceContainer?: string;

  @Metadata({ data: "json, name=resourceLocation" })
  resourceLocation?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
