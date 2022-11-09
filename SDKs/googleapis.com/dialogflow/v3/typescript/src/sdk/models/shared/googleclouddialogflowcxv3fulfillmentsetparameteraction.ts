import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3FulfillmentSetParameterAction
/** 
 * Setting a parameter value.
**/
export class GoogleCloudDialogflowCxV3FulfillmentSetParameterAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
