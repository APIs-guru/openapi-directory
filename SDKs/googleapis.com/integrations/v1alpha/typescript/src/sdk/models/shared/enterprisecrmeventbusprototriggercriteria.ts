import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";


export class EnterpriseCrmEventbusProtoTriggerCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @Metadata({ data: "json, name=triggerCriteriaTaskImplementationClassName" })
  triggerCriteriaTaskImplementationClassName?: string;
}
