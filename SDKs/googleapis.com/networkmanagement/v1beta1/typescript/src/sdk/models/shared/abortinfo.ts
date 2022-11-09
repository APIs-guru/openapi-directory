import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AbortInfoCauseEnum {
    CauseUnspecified = "CAUSE_UNSPECIFIED"
,    UnknownNetwork = "UNKNOWN_NETWORK"
,    UnknownIp = "UNKNOWN_IP"
,    UnknownProject = "UNKNOWN_PROJECT"
,    PermissionDenied = "PERMISSION_DENIED"
,    NoSourceLocation = "NO_SOURCE_LOCATION"
,    InvalidArgument = "INVALID_ARGUMENT"
,    NoExternalIp = "NO_EXTERNAL_IP"
,    UnintendedDestination = "UNINTENDED_DESTINATION"
,    TraceTooLong = "TRACE_TOO_LONG"
,    InternalError = "INTERNAL_ERROR"
,    SourceEndpointNotFound = "SOURCE_ENDPOINT_NOT_FOUND"
,    MismatchedSourceNetwork = "MISMATCHED_SOURCE_NETWORK"
,    DestinationEndpointNotFound = "DESTINATION_ENDPOINT_NOT_FOUND"
,    MismatchedDestinationNetwork = "MISMATCHED_DESTINATION_NETWORK"
,    Unsupported = "UNSUPPORTED"
,    MismatchedIpVersion = "MISMATCHED_IP_VERSION"
}


// AbortInfo
/** 
 * Details of the final state "abort" and associated resource.
**/
export class AbortInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: AbortInfoCauseEnum;

  @Metadata({ data: "json, name=projectsMissingPermission" })
  projectsMissingPermission?: string[];

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
