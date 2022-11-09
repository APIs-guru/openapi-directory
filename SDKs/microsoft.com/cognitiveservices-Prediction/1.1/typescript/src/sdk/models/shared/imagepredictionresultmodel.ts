import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageTagPredictionModel } from "./imagetagpredictionmodel";


// ImagePredictionResultModel
/** 
 * result of an image prediction request
**/
export class ImagePredictionResultModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Iteration" })
  iteration?: string;

  @Metadata({ data: "json, name=Predictions", elemType: shared.ImageTagPredictionModel })
  predictions?: ImageTagPredictionModel[];

  @Metadata({ data: "json, name=Project" })
  project?: string;
}
