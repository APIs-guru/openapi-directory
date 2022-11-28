import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomFloodlightVariable } from "./customfloodlightvariable";



// Conversion
/** 
 * A Conversion represents when a user successfully performs a desired action after seeing an ad.
**/
export class Conversion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childDirectedTreatment" })
  childDirectedTreatment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customVariables", elemType: CustomFloodlightVariable })
  customVariables?: CustomFloodlightVariable[];

  @SpeakeasyMetadata({ data: "json, name=encryptedUserId" })
  encryptedUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptedUserIdCandidates" })
  encryptedUserIdCandidates?: string[];

  @SpeakeasyMetadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=gclid" })
  gclid?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=limitAdTracking" })
  limitAdTracking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchId" })
  matchId?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDeviceId" })
  mobileDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=nonPersonalizedAd" })
  nonPersonalizedAd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ordinal" })
  ordinal?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampMicros" })
  timestampMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=treatmentForUnderage" })
  treatmentForUnderage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
