import { SpeakeasyBase } from "../../../internal/utils";
import { CpuInfo } from "./cpuinfo";
import { MemoryInfo } from "./memoryinfo";
/**
 * Encapsulates performance environment info
**/
export declare class PerfEnvironment extends SpeakeasyBase {
    cpuInfo?: CpuInfo;
    memoryInfo?: MemoryInfo;
}
