import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecEntry } from "./enterprisecrmfrontendseventbusprotoparamspecentry";



export class EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: EnterpriseCrmFrontendsEventbusProtoParamSpecEntry })
  parameters?: EnterpriseCrmFrontendsEventbusProtoParamSpecEntry[];
}
