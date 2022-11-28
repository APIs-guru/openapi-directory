import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChapterInfo
/** 
 * Class ChapterInfo.
**/
export class ChapterInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageDateModified" })
  imageDateModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=ImagePath" })
  imagePath?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageTag" })
  imageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPositionTicks" })
  startPositionTicks?: number;
}
