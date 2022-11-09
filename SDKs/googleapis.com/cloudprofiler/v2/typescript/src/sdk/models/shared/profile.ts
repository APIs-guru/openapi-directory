import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Deployment } from "./deployment";

export enum ProfileProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED"
,    Cpu = "CPU"
,    Wall = "WALL"
,    Heap = "HEAP"
,    Threads = "THREADS"
,    Contention = "CONTENTION"
,    PeakHeap = "PEAK_HEAP"
,    HeapAlloc = "HEAP_ALLOC"
}


// Profile
/** 
 * Profile resource.
**/
export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profileBytes" })
  profileBytes?: string;

  @Metadata({ data: "json, name=profileType" })
  profileType?: ProfileProfileTypeEnum;
}
