import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ParameterMetadataParamTypeEnum {
    Default = "DEFAULT"
,    Text = "TEXT"
,    GcsReadBucket = "GCS_READ_BUCKET"
,    GcsWriteBucket = "GCS_WRITE_BUCKET"
,    GcsReadFile = "GCS_READ_FILE"
,    GcsWriteFile = "GCS_WRITE_FILE"
,    GcsReadFolder = "GCS_READ_FOLDER"
,    GcsWriteFolder = "GCS_WRITE_FOLDER"
,    PubsubTopic = "PUBSUB_TOPIC"
,    PubsubSubscription = "PUBSUB_SUBSCRIPTION"
}


// ParameterMetadata
/** 
 * Metadata for a specific parameter.
**/
export class ParameterMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=customMetadata" })
  customMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=helpText" })
  helpText?: string;

  @Metadata({ data: "json, name=isOptional" })
  isOptional?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paramType" })
  paramType?: ParameterMetadataParamTypeEnum;

  @Metadata({ data: "json, name=regexes" })
  regexes?: string[];
}
