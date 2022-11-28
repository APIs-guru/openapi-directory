import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1LakeMetastore } from "./googleclouddataplexv1lakemetastore";
import { GoogleCloudDataplexV1LakeMetastoreStatus } from "./googleclouddataplexv1lakemetastorestatus";
export declare enum GoogleCloudDataplexV1LakeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
export declare class GoogleCloudDataplexV1LakeInput extends SpeakeasyBase {
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    description?: string;
    displayName?: string;
    labels?: Map<string, string>;
    metastore?: GoogleCloudDataplexV1LakeMetastore;
    metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;
}
/**
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
export declare class GoogleCloudDataplexV1Lake extends SpeakeasyBase {
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    createTime?: string;
    description?: string;
    displayName?: string;
    labels?: Map<string, string>;
    metastore?: GoogleCloudDataplexV1LakeMetastore;
    metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;
    name?: string;
    serviceAccount?: string;
    state?: GoogleCloudDataplexV1LakeStateEnum;
    uid?: string;
    updateTime?: string;
}
