import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1ConsentPolicy } from "./googlecloudhealthcarev1consentpolicy";


export enum ConsentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Revoked = "REVOKED",
    Draft = "DRAFT",
    Rejected = "REJECTED"
}


// Consent
/** 
 * Represents a user's consent.
**/
export class Consent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudHealthcareV1ConsentPolicy })
  policies?: GoogleCloudHealthcareV1ConsentPolicy[];

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConsentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// ConsentInput
/** 
 * Represents a user's consent.
**/
export class ConsentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: GoogleCloudHealthcareV1ConsentPolicy })
  policies?: GoogleCloudHealthcareV1ConsentPolicy[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConsentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
