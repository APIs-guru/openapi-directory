import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JoinGroupRequestDto
/** 
 * Class JoinGroupRequestDto.
**/
export class JoinGroupRequestDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;
}
