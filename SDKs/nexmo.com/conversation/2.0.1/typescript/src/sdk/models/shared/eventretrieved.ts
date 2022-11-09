import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberStateEnum } from "./memberstateenum";


// EventRetrieved
/** 
 * Retrieve Events Response Payload Object Item
**/
export class EventRetrieved extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: Map<string, any>;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=state" })
  state?: MemberStateEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
