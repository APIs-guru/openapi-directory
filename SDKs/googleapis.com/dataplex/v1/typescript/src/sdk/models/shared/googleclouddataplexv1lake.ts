import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1LakeMetastore } from "./googleclouddataplexv1lakemetastore";
import { GoogleCloudDataplexV1LakeMetastoreStatus } from "./googleclouddataplexv1lakemetastorestatus";

export enum GoogleCloudDataplexV1LakeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Lake
/** 
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
export class GoogleCloudDataplexV1Lake extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetStatus" })
  assetStatus?: GoogleCloudDataplexV1AssetStatus;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=metastore" })
  metastore?: GoogleCloudDataplexV1LakeMetastore;

  @Metadata({ data: "json, name=metastoreStatus" })
  metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1LakeStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
