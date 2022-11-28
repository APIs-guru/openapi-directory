import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER",
    AnyAgent = "ANY_AGENT"
}


// GoogleCloudContactcenterinsightsV1ConversationParticipant
/** 
 * The call participant speaking for a given utterance.
**/
export class GoogleCloudContactcenterinsightsV1ConversationParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dialogflowParticipant" })
  dialogflowParticipant?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogflowParticipantName" })
  dialogflowParticipantName?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalUserId" })
  obfuscatedExternalUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
