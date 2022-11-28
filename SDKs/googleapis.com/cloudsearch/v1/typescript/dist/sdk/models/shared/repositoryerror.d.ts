import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RepositoryErrorTypeEnum {
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
/**
 * Errors when the connector is communicating to the source repository.
**/
export declare class RepositoryError extends SpeakeasyBase {
    errorMessage?: string;
    httpStatusCode?: number;
    type?: RepositoryErrorTypeEnum;
}
