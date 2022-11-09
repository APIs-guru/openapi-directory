import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ConsumerInfoTypeEnum {
    ConsumerTypeUnspecified = "CONSUMER_TYPE_UNSPECIFIED",
    Project = "PROJECT",
    Folder = "FOLDER",
    Organization = "ORGANIZATION",
    ServiceSpecific = "SERVICE_SPECIFIC"
}
/**
 * `ConsumerInfo` provides information about the consumer.
**/
export declare class ConsumerInfo extends SpeakeasyBase {
    consumerNumber?: string;
    projectNumber?: string;
    type?: ConsumerInfoTypeEnum;
}
