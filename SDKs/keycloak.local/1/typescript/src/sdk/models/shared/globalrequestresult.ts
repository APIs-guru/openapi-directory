import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GlobalRequestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedRequests" })
  failedRequests?: string[];

  @SpeakeasyMetadata({ data: "json, name=successRequests" })
  successRequests?: string[];
}
