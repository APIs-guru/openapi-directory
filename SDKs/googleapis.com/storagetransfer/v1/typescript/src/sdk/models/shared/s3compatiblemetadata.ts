import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum S3CompatibleMetadataAuthMethodEnum {
    AuthMethodUnspecified = "AUTH_METHOD_UNSPECIFIED"
,    AuthMethodAwsSignatureV4 = "AUTH_METHOD_AWS_SIGNATURE_V4"
,    AuthMethodAwsSignatureV2 = "AUTH_METHOD_AWS_SIGNATURE_V2"
}

export enum S3CompatibleMetadataListApiEnum {
    ListApiUnspecified = "LIST_API_UNSPECIFIED"
,    ListObjectsV2 = "LIST_OBJECTS_V2"
,    ListObjects = "LIST_OBJECTS"
}

export enum S3CompatibleMetadataProtocolEnum {
    NetworkProtocolUnspecified = "NETWORK_PROTOCOL_UNSPECIFIED"
,    NetworkProtocolHttps = "NETWORK_PROTOCOL_HTTPS"
,    NetworkProtocolHttp = "NETWORK_PROTOCOL_HTTP"
}

export enum S3CompatibleMetadataRequestModelEnum {
    RequestModelUnspecified = "REQUEST_MODEL_UNSPECIFIED"
,    RequestModelVirtualHostedStyle = "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE"
,    RequestModelPathStyle = "REQUEST_MODEL_PATH_STYLE"
}


// S3CompatibleMetadata
/** 
 * S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.
**/
export class S3CompatibleMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMethod" })
  authMethod?: S3CompatibleMetadataAuthMethodEnum;

  @Metadata({ data: "json, name=listApi" })
  listApi?: S3CompatibleMetadataListApiEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol?: S3CompatibleMetadataProtocolEnum;

  @Metadata({ data: "json, name=requestModel" })
  requestModel?: S3CompatibleMetadataRequestModelEnum;
}
