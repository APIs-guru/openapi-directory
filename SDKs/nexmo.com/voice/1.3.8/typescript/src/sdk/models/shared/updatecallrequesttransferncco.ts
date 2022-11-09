import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";


export class UpdateCallRequestTransferNccoDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ncco" })
  ncco: Map<string, any>[];

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class UpdateCallRequestTransferNcco extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RequestTransferActionParamEnum;

  @Metadata({ data: "json, name=destination" })
  destination: UpdateCallRequestTransferNccoDestination;
}
