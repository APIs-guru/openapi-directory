import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NewGroupRequestDto
/** 
 * Class NewGroupRequestDto.
**/
export class NewGroupRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;
}
