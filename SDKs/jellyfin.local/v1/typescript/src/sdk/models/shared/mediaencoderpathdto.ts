import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MediaEncoderPathDto
/** 
 * Media Encoder Path Dto.
**/
export class MediaEncoderPathDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PathType" })
  pathType?: string;
}
