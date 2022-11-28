import { SpeakeasyBase } from "../../../internal/utils";
import { CpuTime } from "./cputime";
import { MemInfo } from "./meminfo";
/**
 * Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
**/
export declare class ResourceUtilizationReport extends SpeakeasyBase {
    containers?: Map<string, ResourceUtilizationReport>;
    cpuTime?: CpuTime[];
    memoryInfo?: MemInfo[];
}
