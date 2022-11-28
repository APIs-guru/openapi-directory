import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";



export class EnterpriseCrmEventbusProtoTriggerCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=triggerCriteriaTaskImplementationClassName" })
  triggerCriteriaTaskImplementationClassName?: string;
}
