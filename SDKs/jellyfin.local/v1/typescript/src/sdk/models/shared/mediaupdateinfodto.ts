import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MediaUpdateInfoDto
/** 
 * Media Update Info Dto.
**/
export class MediaUpdateInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=UpdateType" })
  updateType?: string;
}
