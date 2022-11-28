import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";



export class UpdateCallRequestTransferNccoDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ncco" })
  ncco: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class UpdateCallRequestTransferNcco extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RequestTransferActionParamEnum;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: UpdateCallRequestTransferNccoDestination;
}
