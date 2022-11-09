import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudHealthcareV1ConsentPolicy } from "./googlecloudhealthcarev1consentpolicy";

export enum ConsentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
,    Revoked = "REVOKED"
,    Draft = "DRAFT"
,    Rejected = "REJECTED"
}


// Consent
/** 
 * Represents a user's consent.
**/
export class Consent extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.GoogleCloudHealthcareV1ConsentPolicy })
  policies?: GoogleCloudHealthcareV1ConsentPolicy[];

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=state" })
  state?: ConsentStateEnum;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
