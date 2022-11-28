import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1ZoneDiscoverySpec } from "./googleclouddataplexv1zonediscoveryspec";
import { GoogleCloudDataplexV1ZoneResourceSpec } from "./googleclouddataplexv1zoneresourcespec";


export enum GoogleCloudDataplexV1ZoneStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}

export enum GoogleCloudDataplexV1ZoneTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Raw = "RAW",
    Curated = "CURATED"
}


// GoogleCloudDataplexV1ZoneInput
/** 
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
export class GoogleCloudDataplexV1ZoneInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus?: GoogleCloudDataplexV1AssetStatus;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discoverySpec" })
  discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceSpec" })
  resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1ZoneTypeEnum;
}


// GoogleCloudDataplexV1Zone
/** 
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
export class GoogleCloudDataplexV1Zone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus?: GoogleCloudDataplexV1AssetStatus;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discoverySpec" })
  discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSpec" })
  resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1ZoneStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1ZoneTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
