import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResult } from "./googleclouddataplexv1dataprofileresult";
import { GoogleCloudDataplexV1DataQualityResult } from "./googleclouddataplexv1dataqualityresult";
import { GoogleCloudDataplexV1DataQualitySpec } from "./googleclouddataplexv1dataqualityspec";
export declare enum GoogleCloudDataplexV1DataScanJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Canceling = "CANCELING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Pending = "PENDING"
}
export declare enum GoogleCloudDataplexV1DataScanJobTypeEnum {
    DataScanTypeUnspecified = "DATA_SCAN_TYPE_UNSPECIFIED",
    DataQuality = "DATA_QUALITY",
    DataProfile = "DATA_PROFILE"
}
/**
 * A DataScanJob represents an instance of a data scan.
**/
export declare class GoogleCloudDataplexV1DataScanJob extends SpeakeasyBase {
    dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
    dataProfileSpec?: Map<string, any>;
    dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
    dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
    endTime?: string;
    message?: string;
    name?: string;
    startTime?: string;
    state?: GoogleCloudDataplexV1DataScanJobStateEnum;
    type?: GoogleCloudDataplexV1DataScanJobTypeEnum;
    uid?: string;
}
