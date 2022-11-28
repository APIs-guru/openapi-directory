import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Smalltalk = "SMALLTALK"
}


// GoogleCloudDialogflowV2beta1FulfillmentFeature
/** 
 * Whether fulfillment is enabled for the specific feature.
**/
export class GoogleCloudDialogflowV2beta1FulfillmentFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum;
}
