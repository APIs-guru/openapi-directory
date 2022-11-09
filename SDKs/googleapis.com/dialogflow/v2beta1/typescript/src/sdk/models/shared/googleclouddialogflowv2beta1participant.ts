import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1ParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2beta1Participant
/** 
 * Represents a conversation participant (human agent, virtual agent, end-user).
**/
export class GoogleCloudDialogflowV2beta1Participant extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=obfuscatedExternalUserId" })
  obfuscatedExternalUserId?: string;

  @Metadata({ data: "json, name=role" })
  role?: GoogleCloudDialogflowV2beta1ParticipantRoleEnum;
}
