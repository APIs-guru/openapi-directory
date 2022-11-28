import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataSource } from "./googleclouddataplexv1datasource";
import { GoogleCloudDataplexV1DataProfileResult } from "./googleclouddataplexv1dataprofileresult";
import { GoogleCloudDataplexV1DataQualityResult } from "./googleclouddataplexv1dataqualityresult";
import { GoogleCloudDataplexV1DataQualitySpec } from "./googleclouddataplexv1dataqualityspec";
import { GoogleCloudDataplexV1DataScanExecutionSpec } from "./googleclouddataplexv1datascanexecutionspec";


export enum GoogleCloudDataplexV1DataScanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}

export enum GoogleCloudDataplexV1DataScanTypeEnum {
    DataScanTypeUnspecified = "DATA_SCAN_TYPE_UNSPECIFIED",
    DataQuality = "DATA_QUALITY",
    DataProfile = "DATA_PROFILE"
}


// GoogleCloudDataplexV1DataScanInput
/** 
 * Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
**/
export class GoogleCloudDataplexV1DataScanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GoogleCloudDataplexV1DataSource;

  @SpeakeasyMetadata({ data: "json, name=dataProfileResult" })
  dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;

  @SpeakeasyMetadata({ data: "json, name=dataProfileSpec" })
  dataProfileSpec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dataQualityResult" })
  dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;

  @SpeakeasyMetadata({ data: "json, name=dataQualitySpec" })
  dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionSpec" })
  executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}


// GoogleCloudDataplexV1DataScan
/** 
 * Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
**/
export class GoogleCloudDataplexV1DataScan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GoogleCloudDataplexV1DataSource;

  @SpeakeasyMetadata({ data: "json, name=dataProfileResult" })
  dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;

  @SpeakeasyMetadata({ data: "json, name=dataProfileSpec" })
  dataProfileSpec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dataQualityResult" })
  dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;

  @SpeakeasyMetadata({ data: "json, name=dataQualitySpec" })
  dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionSpec" })
  executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1DataScanStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1DataScanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
