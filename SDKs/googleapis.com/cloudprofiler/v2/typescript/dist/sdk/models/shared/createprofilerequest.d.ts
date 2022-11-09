import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Deployment } from "./deployment";
export declare enum CreateProfileRequestProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    Cpu = "CPU",
    Wall = "WALL",
    Heap = "HEAP",
    Threads = "THREADS",
    Contention = "CONTENTION",
    PeakHeap = "PEAK_HEAP",
    HeapAlloc = "HEAP_ALLOC"
}
/**
 * CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.
**/
export declare class CreateProfileRequest extends SpeakeasyBase {
    deployment?: Deployment;
    profileType?: CreateProfileRequestProfileTypeEnum[];
}
