import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTagPredictionModel } from "./imagetagpredictionmodel";



// ImagePredictionResultModel
/** 
 * result of an image prediction request
**/
export class ImagePredictionResultModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Iteration" })
  iteration?: string;

  @SpeakeasyMetadata({ data: "json, name=Predictions", elemType: ImageTagPredictionModel })
  predictions?: ImageTagPredictionModel[];

  @SpeakeasyMetadata({ data: "json, name=Project" })
  project?: string;
}
