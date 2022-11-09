import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";

export enum PollItemsRequestStatusCodesEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Error = "ERROR"
,    Modified = "MODIFIED"
,    NewItem = "NEW_ITEM"
,    Accepted = "ACCEPTED"
}


export class PollItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=queue" })
  queue?: string;

  @Metadata({ data: "json, name=statusCodes" })
  statusCodes?: PollItemsRequestStatusCodesEnum[];
}
