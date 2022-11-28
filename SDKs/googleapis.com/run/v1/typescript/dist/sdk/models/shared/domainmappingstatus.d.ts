import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { ResourceRecord } from "./resourcerecord";
/**
 * The current state of the Domain Mapping.
**/
export declare class DomainMappingStatus extends SpeakeasyBase {
    conditions?: GoogleCloudRunV1Condition[];
    mappedRouteName?: string;
    observedGeneration?: number;
    resourceRecords?: ResourceRecord[];
    url?: string;
}
