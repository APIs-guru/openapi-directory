import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CpuInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuProcessor" })
  cpuProcessor?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuSpeedInGhz" })
  cpuSpeedInGhz?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfCores" })
  numberOfCores?: number;
}
