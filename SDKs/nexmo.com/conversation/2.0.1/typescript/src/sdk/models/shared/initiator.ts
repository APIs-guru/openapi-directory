import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InitiatorJoined extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isSystem" })
  isSystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class Initiator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=joined" })
  joined?: InitiatorJoined;
}
