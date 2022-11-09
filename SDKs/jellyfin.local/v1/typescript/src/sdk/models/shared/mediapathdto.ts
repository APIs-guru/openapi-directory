import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediaPathInfo } from "./mediapathinfo";


// MediaPathDto
/** 
 * Media Path dto.
**/
export class MediaPathDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PathInfo" })
  pathInfo?: MediaPathInfo;
}
