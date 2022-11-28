import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MediaEncoderPathDto
/** 
 * Media Encoder Path Dto.
**/
export class MediaEncoderPathDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PathType" })
  pathType?: string;
}
