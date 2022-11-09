import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTagPredictionModel } from "./imagetagpredictionmodel";
/**
 * result of an image prediction request
**/
export declare class ImagePredictionResultModel extends SpeakeasyBase {
    created?: Date;
    id?: string;
    iteration?: string;
    predictions?: ImageTagPredictionModel[];
    project?: string;
}
