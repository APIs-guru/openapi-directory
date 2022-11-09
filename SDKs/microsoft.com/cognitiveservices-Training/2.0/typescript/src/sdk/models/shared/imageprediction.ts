import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Prediction } from "./prediction";


export class ImagePrediction extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=iteration" })
  iteration?: string;

  @Metadata({ data: "json, name=predictions", elemType: shared.Prediction })
  predictions?: Prediction[];

  @Metadata({ data: "json, name=project" })
  project?: string;
}
