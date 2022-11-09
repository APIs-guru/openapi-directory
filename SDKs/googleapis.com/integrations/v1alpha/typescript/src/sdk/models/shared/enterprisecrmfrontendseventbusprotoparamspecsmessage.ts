import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecEntry } from "./enterprisecrmfrontendseventbusprotoparamspecentry";


export class EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParamSpecEntry })
  parameters?: EnterpriseCrmFrontendsEventbusProtoParamSpecEntry[];
}
