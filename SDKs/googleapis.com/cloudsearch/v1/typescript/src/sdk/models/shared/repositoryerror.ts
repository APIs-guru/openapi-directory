import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RepositoryErrorTypeEnum {
    Unknown = "UNKNOWN"
,    NetworkError = "NETWORK_ERROR"
,    DnsError = "DNS_ERROR"
,    ConnectionError = "CONNECTION_ERROR"
,    AuthenticationError = "AUTHENTICATION_ERROR"
,    AuthorizationError = "AUTHORIZATION_ERROR"
,    ServerError = "SERVER_ERROR"
,    QuotaExceeded = "QUOTA_EXCEEDED"
,    ServiceUnavailable = "SERVICE_UNAVAILABLE"
,    ClientError = "CLIENT_ERROR"
}


// RepositoryError
/** 
 * Errors when the connector is communicating to the source repository.
**/
export class RepositoryError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=httpStatusCode" })
  httpStatusCode?: number;

  @Metadata({ data: "json, name=type" })
  type?: RepositoryErrorTypeEnum;
}
