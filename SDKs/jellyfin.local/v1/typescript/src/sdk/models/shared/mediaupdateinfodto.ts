import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MediaUpdateInfoDto
/** 
 * Media Update Info Dto.
**/
export class MediaUpdateInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateType" })
  updateType?: string;
}
