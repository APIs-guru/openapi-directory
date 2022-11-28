import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CpuInfo } from "./cpuinfo";
import { MemoryInfo } from "./memoryinfo";



// PerfEnvironment
/** 
 * Encapsulates performance environment info
**/
export class PerfEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuInfo" })
  cpuInfo?: CpuInfo;

  @SpeakeasyMetadata({ data: "json, name=memoryInfo" })
  memoryInfo?: MemoryInfo;
}
