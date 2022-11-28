import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1LakeMetastore } from "./googleclouddataplexv1lakemetastore";
import { GoogleCloudDataplexV1LakeMetastoreStatus } from "./googleclouddataplexv1lakemetastorestatus";


export enum GoogleCloudDataplexV1LakeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1LakeInput
/** 
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
export class GoogleCloudDataplexV1LakeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus?: GoogleCloudDataplexV1AssetStatus;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metastore" })
  metastore?: GoogleCloudDataplexV1LakeMetastore;

  @SpeakeasyMetadata({ data: "json, name=metastoreStatus" })
  metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;
}


// GoogleCloudDataplexV1Lake
/** 
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
export class GoogleCloudDataplexV1Lake extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus?: GoogleCloudDataplexV1AssetStatus;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metastore" })
  metastore?: GoogleCloudDataplexV1LakeMetastore;

  @SpeakeasyMetadata({ data: "json, name=metastoreStatus" })
  metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1LakeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
