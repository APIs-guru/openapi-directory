import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction
/** 
 * Setting a parameter value.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
