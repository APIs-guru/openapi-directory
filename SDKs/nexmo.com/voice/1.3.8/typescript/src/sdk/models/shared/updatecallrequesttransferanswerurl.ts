import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";



export class UpdateCallRequestTransferAnswerUrlDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string[];
}


export class UpdateCallRequestTransferAnswerUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RequestTransferActionParamEnum;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: UpdateCallRequestTransferAnswerUrlDestination;
}
