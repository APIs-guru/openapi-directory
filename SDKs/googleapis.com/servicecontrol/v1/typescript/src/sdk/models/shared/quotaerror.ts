import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";


export enum QuotaErrorCodeEnum {
    Unspecified = "UNSPECIFIED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    OutOfRange = "OUT_OF_RANGE",
    BillingNotActive = "BILLING_NOT_ACTIVE",
    ProjectDeleted = "PROJECT_DELETED",
    ApiKeyInvalid = "API_KEY_INVALID",
    ApiKeyExpired = "API_KEY_EXPIRED",
    SpatulaHeaderInvalid = "SPATULA_HEADER_INVALID",
    LoasRoleInvalid = "LOAS_ROLE_INVALID",
    NoLoasProject = "NO_LOAS_PROJECT",
    ProjectStatusUnavailable = "PROJECT_STATUS_UNAVAILABLE",
    ServiceStatusUnavailable = "SERVICE_STATUS_UNAVAILABLE",
    BillingStatusUnavailable = "BILLING_STATUS_UNAVAILABLE",
    QuotaSystemUnavailable = "QUOTA_SYSTEM_UNAVAILABLE"
}


// QuotaError
/** 
 * Represents error information for QuotaOperation.
**/
export class QuotaError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: QuotaErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
