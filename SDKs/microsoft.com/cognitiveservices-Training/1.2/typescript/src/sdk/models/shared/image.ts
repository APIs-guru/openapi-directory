import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PredictionTag } from "./predictiontag";
import { ImageTag } from "./imagetag";


// Image
/** 
 * Image model to be sent as JSON
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ImageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=Predictions", elemType: shared.PredictionTag })
  predictions?: PredictionTag[];

  @Metadata({ data: "json, name=Tags", elemType: shared.ImageTag })
  tags?: ImageTag[];

  @Metadata({ data: "json, name=ThumbnailUri" })
  thumbnailUri?: string;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
