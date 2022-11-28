import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataSource } from "./googleclouddataplexv1datasource";
import { GoogleCloudDataplexV1DataProfileResult } from "./googleclouddataplexv1dataprofileresult";
import { GoogleCloudDataplexV1DataQualityResult } from "./googleclouddataplexv1dataqualityresult";
import { GoogleCloudDataplexV1DataQualitySpec } from "./googleclouddataplexv1dataqualityspec";
import { GoogleCloudDataplexV1DataScanExecutionSpec } from "./googleclouddataplexv1datascanexecutionspec";
export declare enum GoogleCloudDataplexV1DataScanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
export declare enum GoogleCloudDataplexV1DataScanTypeEnum {
    DataScanTypeUnspecified = "DATA_SCAN_TYPE_UNSPECIFIED",
    DataQuality = "DATA_QUALITY",
    DataProfile = "DATA_PROFILE"
}
/**
 * Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
**/
export declare class GoogleCloudDataplexV1DataScanInput extends SpeakeasyBase {
    data?: GoogleCloudDataplexV1DataSource;
    dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
    dataProfileSpec?: Map<string, any>;
    dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
    dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
    description?: string;
    displayName?: string;
    executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;
    labels?: Map<string, string>;
}
/**
 * Represents a user-visible job which provides the insights for the related data source. For examples: - Data Quality: generates queries based on the rules and run against the data to get data quality check results. - Data Profile: analyzes the data in table(s) and generates insights about the structure, content and relationships (such as null percent, cardinality, min/max/mean, etc).
**/
export declare class GoogleCloudDataplexV1DataScan extends SpeakeasyBase {
    createTime?: string;
    data?: GoogleCloudDataplexV1DataSource;
    dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
    dataProfileSpec?: Map<string, any>;
    dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
    dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
    description?: string;
    displayName?: string;
    executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;
    labels?: Map<string, string>;
    name?: string;
    state?: GoogleCloudDataplexV1DataScanStateEnum;
    type?: GoogleCloudDataplexV1DataScanTypeEnum;
    uid?: string;
    updateTime?: string;
}
