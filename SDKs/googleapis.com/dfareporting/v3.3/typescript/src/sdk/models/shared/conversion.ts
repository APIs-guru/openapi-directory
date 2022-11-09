import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomFloodlightVariable } from "./customfloodlightvariable";


// Conversion
/** 
 * A Conversion represents when a user successfully performs a desired action after seeing an ad.
**/
export class Conversion extends SpeakeasyBase {
  @Metadata({ data: "json, name=childDirectedTreatment" })
  childDirectedTreatment?: boolean;

  @Metadata({ data: "json, name=customVariables", elemType: shared.CustomFloodlightVariable })
  customVariables?: CustomFloodlightVariable[];

  @Metadata({ data: "json, name=encryptedUserId" })
  encryptedUserId?: string;

  @Metadata({ data: "json, name=encryptedUserIdCandidates" })
  encryptedUserIdCandidates?: string[];

  @Metadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @Metadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @Metadata({ data: "json, name=gclid" })
  gclid?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=limitAdTracking" })
  limitAdTracking?: boolean;

  @Metadata({ data: "json, name=matchId" })
  matchId?: string;

  @Metadata({ data: "json, name=mobileDeviceId" })
  mobileDeviceId?: string;

  @Metadata({ data: "json, name=nonPersonalizedAd" })
  nonPersonalizedAd?: boolean;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=timestampMicros" })
  timestampMicros?: string;

  @Metadata({ data: "json, name=treatmentForUnderage" })
  treatmentForUnderage?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
