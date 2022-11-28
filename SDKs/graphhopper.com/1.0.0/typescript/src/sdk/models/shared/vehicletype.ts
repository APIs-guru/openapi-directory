import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VehicleTypeNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap",
    Tomtom = "tomtom"
}


export class VehicleType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: number[];

  @SpeakeasyMetadata({ data: "json, name=consider_traffic" })
  considerTraffic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cost_per_activation" })
  costPerActivation?: number;

  @SpeakeasyMetadata({ data: "json, name=cost_per_meter" })
  costPerMeter?: number;

  @SpeakeasyMetadata({ data: "json, name=cost_per_second" })
  costPerSecond?: number;

  @SpeakeasyMetadata({ data: "json, name=network_data_provider" })
  networkDataProvider?: VehicleTypeNetworkDataProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=service_time_factor" })
  serviceTimeFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=speed_factor" })
  speedFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=type_id" })
  typeId: string;
}
