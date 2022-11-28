import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTagPrediction } from "./imagetagprediction";



// ImagePredictionResult
/** 
 * result of an image prediction request
**/
export class ImagePredictionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Iteration" })
  iteration?: string;

  @SpeakeasyMetadata({ data: "json, name=Predictions", elemType: ImageTagPrediction })
  predictions?: ImageTagPrediction[];

  @SpeakeasyMetadata({ data: "json, name=Project" })
  project?: string;
}
