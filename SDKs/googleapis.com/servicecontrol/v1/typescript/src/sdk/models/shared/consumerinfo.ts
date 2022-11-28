import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConsumerInfoTypeEnum {
    ConsumerTypeUnspecified = "CONSUMER_TYPE_UNSPECIFIED",
    Project = "PROJECT",
    Folder = "FOLDER",
    Organization = "ORGANIZATION",
    ServiceSpecific = "SERVICE_SPECIFIC"
}


// ConsumerInfo
/** 
 * `ConsumerInfo` provides information about the consumer.
**/
export class ConsumerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNumber" })
  consumerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ConsumerInfoTypeEnum;
}
