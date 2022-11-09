import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VehicleTypeNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap"
,    Tomtom = "tomtom"
}


export class VehicleType extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: number[];

  @Metadata({ data: "json, name=consider_traffic" })
  considerTraffic?: boolean;

  @Metadata({ data: "json, name=cost_per_activation" })
  costPerActivation?: number;

  @Metadata({ data: "json, name=cost_per_meter" })
  costPerMeter?: number;

  @Metadata({ data: "json, name=cost_per_second" })
  costPerSecond?: number;

  @Metadata({ data: "json, name=network_data_provider" })
  networkDataProvider?: VehicleTypeNetworkDataProviderEnum;

  @Metadata({ data: "json, name=profile" })
  profile?: Map<string, any>;

  @Metadata({ data: "json, name=service_time_factor" })
  serviceTimeFactor?: number;

  @Metadata({ data: "json, name=speed_factor" })
  speedFactor?: number;

  @Metadata({ data: "json, name=type_id" })
  typeId: string;
}
