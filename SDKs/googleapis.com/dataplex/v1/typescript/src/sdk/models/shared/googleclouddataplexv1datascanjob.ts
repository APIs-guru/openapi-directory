import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResult } from "./googleclouddataplexv1dataprofileresult";
import { GoogleCloudDataplexV1DataQualityResult } from "./googleclouddataplexv1dataqualityresult";
import { GoogleCloudDataplexV1DataQualitySpec } from "./googleclouddataplexv1dataqualityspec";


export enum GoogleCloudDataplexV1DataScanJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Canceling = "CANCELING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Pending = "PENDING"
}

export enum GoogleCloudDataplexV1DataScanJobTypeEnum {
    DataScanTypeUnspecified = "DATA_SCAN_TYPE_UNSPECIFIED",
    DataQuality = "DATA_QUALITY",
    DataProfile = "DATA_PROFILE"
}


// GoogleCloudDataplexV1DataScanJob
/** 
 * A DataScanJob represents an instance of a data scan.
**/
export class GoogleCloudDataplexV1DataScanJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataProfileResult" })
  dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;

  @SpeakeasyMetadata({ data: "json, name=dataProfileSpec" })
  dataProfileSpec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dataQualityResult" })
  dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;

  @SpeakeasyMetadata({ data: "json, name=dataQualitySpec" })
  dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1DataScanJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1DataScanJobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
