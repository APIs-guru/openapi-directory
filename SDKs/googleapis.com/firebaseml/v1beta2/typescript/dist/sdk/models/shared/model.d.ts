import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";
import { ModelState } from "./modelstate";
import { TfLiteModel } from "./tflitemodel";
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
