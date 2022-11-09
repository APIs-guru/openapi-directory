import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CpuInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuProcessor" })
  cpuProcessor?: string;

  @Metadata({ data: "json, name=cpuSpeedInGhz" })
  cpuSpeedInGhz?: number;

  @Metadata({ data: "json, name=numberOfCores" })
  numberOfCores?: number;
}
