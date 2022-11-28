import { SpeakeasyBase } from "../../../internal/utils";
import { ModelState } from "./modelstate";
import { TfLiteModelInput } from "./tflitemodel";
import { Operation } from "./operation";
import { TfLiteModel } from "./tflitemodel";
/**
 * An ML model hosted in Firebase ML
**/
export declare class ModelInput extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    state?: ModelState;
    tags?: string[];
    tfliteModel?: TfLiteModelInput;
}
/**
 * An ML model hosted in Firebase ML
**/
export declare class Model extends SpeakeasyBase {
    activeOperations?: Operation[];
    createTime?: string;
    displayName?: string;
    etag?: string;
    modelHash?: string;
    name?: string;
    state?: ModelState;
    tags?: string[];
    tfliteModel?: TfLiteModel;
    updateTime?: string;
}
