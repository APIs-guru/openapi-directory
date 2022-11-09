import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagBinding
/** 
 * A TagBinding represents a connection between a TagValue and a cloud resource (currently project, folder, or organization). Once a TagBinding is created, the TagValue is applied to all the descendants of the cloud resource.
**/
export class TagBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=tagValue" })
  tagValue?: string;
}
