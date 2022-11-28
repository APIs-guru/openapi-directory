import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
export declare enum ProfileProfileTypeEnum {
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
 * Profile resource.
**/
export declare class ProfileInput extends SpeakeasyBase {
    deployment?: Deployment;
    duration?: string;
    labels?: Map<string, string>;
    profileBytes?: string;
    profileType?: ProfileProfileTypeEnum;
}
/**
 * Profile resource.
**/
export declare class Profile extends SpeakeasyBase {
    deployment?: Deployment;
    duration?: string;
    labels?: Map<string, string>;
    name?: string;
    profileBytes?: string;
    profileType?: ProfileProfileTypeEnum;
}
