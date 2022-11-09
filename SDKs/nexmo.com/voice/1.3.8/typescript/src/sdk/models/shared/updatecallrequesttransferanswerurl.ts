import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestTransferActionParamEnum } from "./requesttransferactionparamenum";


export class UpdateCallRequestTransferAnswerUrlDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string[];
}


export class UpdateCallRequestTransferAnswerUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RequestTransferActionParamEnum;

  @Metadata({ data: "json, name=destination" })
  destination: UpdateCallRequestTransferAnswerUrlDestination;
}
