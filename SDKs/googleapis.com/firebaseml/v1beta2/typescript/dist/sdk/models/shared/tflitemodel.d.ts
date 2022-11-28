import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that is specific to TfLite models.
**/
export declare class TfLiteModelInput extends SpeakeasyBase {
    automlModel?: string;
    gcsTfliteUri?: string;
}
/**
 * Information that is specific to TfLite models.
**/
export declare class TfLiteModel extends SpeakeasyBase {
    automlModel?: string;
    gcsTfliteUri?: string;
    sizeBytes?: string;
}
