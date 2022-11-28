import { SpeakeasyBase } from "../../../internal/utils";
import { Prediction } from "./prediction";
export declare class ImagePrediction extends SpeakeasyBase {
    created?: Date;
    id?: string;
    iteration?: string;
    predictions?: Prediction[];
    project?: string;
}
