import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NewGroupRequestDto
/** 
 * Class NewGroupRequestDto.
**/
export class NewGroupRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;
}
