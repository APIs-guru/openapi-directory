import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceUtilizationReport } from "./resourceutilizationreport";
import { CpuTime } from "./cputime";
import { MemInfo } from "./meminfo";


// ResourceUtilizationReport
/** 
 * Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
**/
export class ResourceUtilizationReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.ResourceUtilizationReport })
  containers?: Map<string, ResourceUtilizationReport>;

  @Metadata({ data: "json, name=cpuTime", elemType: shared.CpuTime })
  cpuTime?: CpuTime[];

  @Metadata({ data: "json, name=memoryInfo", elemType: shared.MemInfo })
  memoryInfo?: MemInfo[];
}
