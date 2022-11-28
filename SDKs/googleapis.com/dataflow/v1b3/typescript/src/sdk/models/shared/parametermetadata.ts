import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ParameterMetadataParamTypeEnum {
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


// ParameterMetadata
/** 
 * Metadata for a specific parameter.
**/
export class ParameterMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMetadata" })
  customMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=helpText" })
  helpText?: string;

  @SpeakeasyMetadata({ data: "json, name=isOptional" })
  isOptional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paramType" })
  paramType?: ParameterMetadataParamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=regexes" })
  regexes?: string[];
}
