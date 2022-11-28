import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2ParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2Participant
/** 
 * Represents a conversation participant (human agent, virtual agent, end-user).
**/
export class GoogleCloudDialogflowV2Participant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalUserId" })
  obfuscatedExternalUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: GoogleCloudDialogflowV2ParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=sipRecordingMediaLabel" })
  sipRecordingMediaLabel?: string;
}
