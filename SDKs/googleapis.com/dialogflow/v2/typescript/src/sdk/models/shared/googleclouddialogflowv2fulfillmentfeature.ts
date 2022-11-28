import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Smalltalk = "SMALLTALK"
}


// GoogleCloudDialogflowV2FulfillmentFeature
/** 
 * Whether fulfillment is enabled for the specific feature.
**/
export class GoogleCloudDialogflowV2FulfillmentFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum;
}
