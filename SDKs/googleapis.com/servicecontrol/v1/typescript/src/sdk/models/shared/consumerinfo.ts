import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConsumerInfoTypeEnum {
    ConsumerTypeUnspecified = "CONSUMER_TYPE_UNSPECIFIED"
,    Project = "PROJECT"
,    Folder = "FOLDER"
,    Organization = "ORGANIZATION"
,    ServiceSpecific = "SERVICE_SPECIFIC"
}


// ConsumerInfo
/** 
 * `ConsumerInfo` provides information about the consumer.
**/
export class ConsumerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNumber" })
  consumerNumber?: string;

  @Metadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: ConsumerInfoTypeEnum;
}
