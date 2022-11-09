import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction
/** 
 * Setting a parameter value.
**/
export class GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
