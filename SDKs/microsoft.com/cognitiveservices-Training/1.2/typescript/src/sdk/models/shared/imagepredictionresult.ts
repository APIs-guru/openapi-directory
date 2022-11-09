import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageTagPrediction } from "./imagetagprediction";


// ImagePredictionResult
/** 
 * result of an image prediction request
**/
export class ImagePredictionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Iteration" })
  iteration?: string;

  @Metadata({ data: "json, name=Predictions", elemType: shared.ImageTagPrediction })
  predictions?: ImageTagPrediction[];

  @Metadata({ data: "json, name=Project" })
  project?: string;
}
