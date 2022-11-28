import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1ConsentPolicy } from "./googlecloudhealthcarev1consentpolicy";
export declare enum ConsentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Revoked = "REVOKED",
    Draft = "DRAFT",
    Rejected = "REJECTED"
}
/**
 * Represents a user's consent.
**/
export declare class Consent extends SpeakeasyBase {
    consentArtifact?: string;
    expireTime?: string;
    metadata?: Map<string, string>;
    name?: string;
    policies?: GoogleCloudHealthcareV1ConsentPolicy[];
    revisionCreateTime?: string;
    revisionId?: string;
    state?: ConsentStateEnum;
    ttl?: string;
    userId?: string;
}
/**
 * Represents a user's consent.
**/
export declare class ConsentInput extends SpeakeasyBase {
    consentArtifact?: string;
    expireTime?: string;
    metadata?: Map<string, string>;
    name?: string;
    policies?: GoogleCloudHealthcareV1ConsentPolicy[];
    state?: ConsentStateEnum;
    ttl?: string;
    userId?: string;
}
