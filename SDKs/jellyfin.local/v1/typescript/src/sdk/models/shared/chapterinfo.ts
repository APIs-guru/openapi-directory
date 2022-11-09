import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChapterInfo
/** 
 * Class ChapterInfo.
**/
export class ChapterInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageDateModified" })
  imageDateModified?: Date;

  @Metadata({ data: "json, name=ImagePath" })
  imagePath?: string;

  @Metadata({ data: "json, name=ImageTag" })
  imageTag?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=StartPositionTicks" })
  startPositionTicks?: number;
}
