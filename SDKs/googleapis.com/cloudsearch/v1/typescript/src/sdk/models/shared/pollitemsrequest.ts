import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";


export enum PollItemsRequestStatusCodesEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}


export class PollItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorName" })
  connectorName?: string;

  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=queue" })
  queue?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCodes" })
  statusCodes?: PollItemsRequestStatusCodesEnum[];
}
