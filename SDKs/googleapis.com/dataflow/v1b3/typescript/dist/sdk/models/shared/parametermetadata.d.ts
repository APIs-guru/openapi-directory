import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ParameterMetadataParamTypeEnum {
    Default = "DEFAULT",
    Text = "TEXT",
    GcsReadBucket = "GCS_READ_BUCKET",
    GcsWriteBucket = "GCS_WRITE_BUCKET",
    GcsReadFile = "GCS_READ_FILE",
    GcsWriteFile = "GCS_WRITE_FILE",
    GcsReadFolder = "GCS_READ_FOLDER",
    GcsWriteFolder = "GCS_WRITE_FOLDER",
    PubsubTopic = "PUBSUB_TOPIC",
    PubsubSubscription = "PUBSUB_SUBSCRIPTION"
}
/**
 * Metadata for a specific parameter.
**/
export declare class ParameterMetadata extends SpeakeasyBase {
    customMetadata?: Map<string, string>;
    helpText?: string;
    isOptional?: boolean;
    label?: string;
    name?: string;
    paramType?: ParameterMetadataParamTypeEnum;
    regexes?: string[];
}
