import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CpuTime } from "./cputime";
import { MemInfo } from "./meminfo";



// ResourceUtilizationReport
/** 
 * Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
**/
export class ResourceUtilizationReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containers", elemType: ResourceUtilizationReport })
  containers?: Map<string, ResourceUtilizationReport>;

  @SpeakeasyMetadata({ data: "json, name=cpuTime", elemType: CpuTime })
  cpuTime?: CpuTime[];

  @SpeakeasyMetadata({ data: "json, name=memoryInfo", elemType: MemInfo })
  memoryInfo?: MemInfo[];
}
