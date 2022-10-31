package shared




type S3CompatibleMetadataAuthMethodEnum string

const (
    S3CompatibleMetadataAuthMethodEnumAuthMethodUnspecified S3CompatibleMetadataAuthMethodEnum = "AUTH_METHOD_UNSPECIFIED"
S3CompatibleMetadataAuthMethodEnumAuthMethodAwsSignatureV4 S3CompatibleMetadataAuthMethodEnum = "AUTH_METHOD_AWS_SIGNATURE_V4"
S3CompatibleMetadataAuthMethodEnumAuthMethodAwsSignatureV2 S3CompatibleMetadataAuthMethodEnum = "AUTH_METHOD_AWS_SIGNATURE_V2"
)



type S3CompatibleMetadataListAPIEnum string

const (
    S3CompatibleMetadataListAPIEnumListAPIUnspecified S3CompatibleMetadataListAPIEnum = "LIST_API_UNSPECIFIED"
S3CompatibleMetadataListAPIEnumListObjectsV2 S3CompatibleMetadataListAPIEnum = "LIST_OBJECTS_V2"
S3CompatibleMetadataListAPIEnumListObjects S3CompatibleMetadataListAPIEnum = "LIST_OBJECTS"
)



type S3CompatibleMetadataProtocolEnum string

const (
    S3CompatibleMetadataProtocolEnumNetworkProtocolUnspecified S3CompatibleMetadataProtocolEnum = "NETWORK_PROTOCOL_UNSPECIFIED"
S3CompatibleMetadataProtocolEnumNetworkProtocolHTTPS S3CompatibleMetadataProtocolEnum = "NETWORK_PROTOCOL_HTTPS"
S3CompatibleMetadataProtocolEnumNetworkProtocolHTTP S3CompatibleMetadataProtocolEnum = "NETWORK_PROTOCOL_HTTP"
)



type S3CompatibleMetadataRequestModelEnum string

const (
    S3CompatibleMetadataRequestModelEnumRequestModelUnspecified S3CompatibleMetadataRequestModelEnum = "REQUEST_MODEL_UNSPECIFIED"
S3CompatibleMetadataRequestModelEnumRequestModelVirtualHostedStyle S3CompatibleMetadataRequestModelEnum = "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE"
S3CompatibleMetadataRequestModelEnumRequestModelPathStyle S3CompatibleMetadataRequestModelEnum = "REQUEST_MODEL_PATH_STYLE"
)


type S3CompatibleMetadata struct {
    AuthMethod *S3CompatibleMetadataAuthMethodEnum `json:"authMethod,omitempty"`
    ListAPI *S3CompatibleMetadataListAPIEnum `json:"listApi,omitempty"`
    Protocol *S3CompatibleMetadataProtocolEnum `json:"protocol,omitempty"`
    RequestModel *S3CompatibleMetadataRequestModelEnum `json:"requestModel,omitempty"`
    
}

