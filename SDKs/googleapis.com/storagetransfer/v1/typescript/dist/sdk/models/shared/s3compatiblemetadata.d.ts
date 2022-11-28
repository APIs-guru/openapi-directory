import { SpeakeasyBase } from "../../../internal/utils";
export declare enum S3CompatibleMetadataAuthMethodEnum {
    AuthMethodUnspecified = "AUTH_METHOD_UNSPECIFIED",
    AuthMethodAwsSignatureV4 = "AUTH_METHOD_AWS_SIGNATURE_V4",
    AuthMethodAwsSignatureV2 = "AUTH_METHOD_AWS_SIGNATURE_V2"
}
export declare enum S3CompatibleMetadataListApiEnum {
    ListApiUnspecified = "LIST_API_UNSPECIFIED",
    ListObjectsV2 = "LIST_OBJECTS_V2",
    ListObjects = "LIST_OBJECTS"
}
export declare enum S3CompatibleMetadataProtocolEnum {
    NetworkProtocolUnspecified = "NETWORK_PROTOCOL_UNSPECIFIED",
    NetworkProtocolHttps = "NETWORK_PROTOCOL_HTTPS",
    NetworkProtocolHttp = "NETWORK_PROTOCOL_HTTP"
}
export declare enum S3CompatibleMetadataRequestModelEnum {
    RequestModelUnspecified = "REQUEST_MODEL_UNSPECIFIED",
    RequestModelVirtualHostedStyle = "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE",
    RequestModelPathStyle = "REQUEST_MODEL_PATH_STYLE"
}
/**
 * S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.
**/
export declare class S3CompatibleMetadata extends SpeakeasyBase {
    authMethod?: S3CompatibleMetadataAuthMethodEnum;
    listApi?: S3CompatibleMetadataListApiEnum;
    protocol?: S3CompatibleMetadataProtocolEnum;
    requestModel?: S3CompatibleMetadataRequestModelEnum;
}
