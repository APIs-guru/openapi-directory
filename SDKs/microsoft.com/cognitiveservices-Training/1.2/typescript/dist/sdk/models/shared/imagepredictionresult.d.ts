import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTagPrediction } from "./imagetagprediction";
/**
 * result of an image prediction request
**/
export declare class ImagePredictionResult extends SpeakeasyBase {
    created?: Date;
    id?: string;
    iteration?: string;
    predictions?: ImageTagPrediction[];
    project?: string;
}
