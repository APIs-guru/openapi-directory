import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JoinGroupRequestDto
/** 
 * Class JoinGroupRequestDto.
**/
export class JoinGroupRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;
}
