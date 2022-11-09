import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InitiatorJoined extends SpeakeasyBase {
  @Metadata({ data: "json, name=isSystem" })
  isSystem?: boolean;

  @Metadata({ data: "json, name=member_id" })
  memberId?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}


export class Initiator extends SpeakeasyBase {
  @Metadata({ data: "json, name=joined" })
  joined?: InitiatorJoined;
}
