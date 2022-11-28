import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaPathInfo } from "./mediapathinfo";



// MediaPathDto
/** 
 * Media Path dto.
**/
export class MediaPathDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PathInfo" })
  pathInfo?: MediaPathInfo;
}
