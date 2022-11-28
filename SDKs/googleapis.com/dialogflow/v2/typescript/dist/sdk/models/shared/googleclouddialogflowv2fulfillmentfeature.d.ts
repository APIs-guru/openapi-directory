import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Smalltalk = "SMALLTALK"
}
/**
 * Whether fulfillment is enabled for the specific feature.
**/
export declare class GoogleCloudDialogflowV2FulfillmentFeature extends SpeakeasyBase {
    type?: GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum;
}
