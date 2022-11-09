import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
,    AnyAgent = "ANY_AGENT"
}


// GoogleCloudContactcenterinsightsV1ConversationParticipant
/** 
 * The call participant speaking for a given utterance.
**/
export class GoogleCloudContactcenterinsightsV1ConversationParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=dialogflowParticipant" })
  dialogflowParticipant?: string;

  @Metadata({ data: "json, name=dialogflowParticipantName" })
  dialogflowParticipantName?: string;

  @Metadata({ data: "json, name=obfuscatedExternalUserId" })
  obfuscatedExternalUserId?: string;

  @Metadata({ data: "json, name=role" })
  role?: GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
