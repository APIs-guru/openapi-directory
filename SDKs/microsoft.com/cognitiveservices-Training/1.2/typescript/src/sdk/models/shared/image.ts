import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictionTag } from "./predictiontag";
import { ImageTag } from "./imagetag";



// Image
/** 
 * Image model to be sent as JSON
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Predictions", elemType: PredictionTag })
  predictions?: PredictionTag[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: ImageTag })
  tags?: ImageTag[];

  @SpeakeasyMetadata({ data: "json, name=ThumbnailUri" })
  thumbnailUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
