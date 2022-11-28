import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1ParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}


// GoogleCloudDialogflowV2beta1Participant
/** 
 * Represents a conversation participant (human agent, virtual agent, end-user).
**/
export class GoogleCloudDialogflowV2beta1Participant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscatedExternalUserId" })
  obfuscatedExternalUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: GoogleCloudDialogflowV2beta1ParticipantRoleEnum;
}
