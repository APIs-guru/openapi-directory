import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GlobalRequestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedRequests" })
  failedRequests?: string[];

  @Metadata({ data: "json, name=successRequests" })
  successRequests?: string[];
}
