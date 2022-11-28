import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
import { ImageRegion } from "./imageregion";
import { ImageTag } from "./imagetag";



// ImagePerformance
/** 
 * Image performance model
**/
export class ImagePerformance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=predictions", elemType: Prediction })
  predictions?: Prediction[];

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: ImageRegion })
  regions?: ImageRegion[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ImageTag })
  tags?: ImageTag[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
