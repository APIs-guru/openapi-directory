import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberStateEnum } from "./memberstateenum";



// EventRetrieved
/** 
 * Retrieve Events Response Payload Object Item
**/
export class EventRetrieved extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: MemberStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
