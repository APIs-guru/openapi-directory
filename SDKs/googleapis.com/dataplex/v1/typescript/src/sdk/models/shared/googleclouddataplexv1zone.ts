import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1ZoneDiscoverySpec } from "./googleclouddataplexv1zonediscoveryspec";
import { GoogleCloudDataplexV1ZoneResourceSpec } from "./googleclouddataplexv1zoneresourcespec";

export enum GoogleCloudDataplexV1ZoneStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    ActionRequired = "ACTION_REQUIRED"
}

export enum GoogleCloudDataplexV1ZoneTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Raw = "RAW"
,    Curated = "CURATED"
}


// GoogleCloudDataplexV1Zone
/** 
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
export class GoogleCloudDataplexV1Zone extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetStatus" })
  assetStatus?: GoogleCloudDataplexV1AssetStatus;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discoverySpec" })
  discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceSpec" })
  resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1ZoneStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1ZoneTypeEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
