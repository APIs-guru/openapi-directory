import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RepositoryErrorTypeEnum {
    Unknown = "UNKNOWN",
    NetworkError = "NETWORK_ERROR",
    DnsError = "DNS_ERROR",
    ConnectionError = "CONNECTION_ERROR",
    AuthenticationError = "AUTHENTICATION_ERROR",
    AuthorizationError = "AUTHORIZATION_ERROR",
    ServerError = "SERVER_ERROR",
    QuotaExceeded = "QUOTA_EXCEEDED",
    ServiceUnavailable = "SERVICE_UNAVAILABLE",
    ClientError = "CLIENT_ERROR"
}


// RepositoryError
/** 
 * Errors when the connector is communicating to the source repository.
**/
export class RepositoryError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RepositoryErrorTypeEnum;
}
