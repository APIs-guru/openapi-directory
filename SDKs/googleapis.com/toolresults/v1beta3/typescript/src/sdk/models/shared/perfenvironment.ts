import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CpuInfo } from "./cpuinfo";
import { MemoryInfo } from "./memoryinfo";


// PerfEnvironment
/** 
 * Encapsulates performance environment info
**/
export class PerfEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuInfo" })
  cpuInfo?: CpuInfo;

  @Metadata({ data: "json, name=memoryInfo" })
  memoryInfo?: MemoryInfo;
}
