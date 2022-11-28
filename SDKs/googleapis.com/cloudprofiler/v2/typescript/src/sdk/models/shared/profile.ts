import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";


export enum ProfileProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    Cpu = "CPU",
    Wall = "WALL",
    Heap = "HEAP",
    Threads = "THREADS",
    Contention = "CONTENTION",
    PeakHeap = "PEAK_HEAP",
    HeapAlloc = "HEAP_ALLOC"
}


// ProfileInput
/** 
 * Profile resource.
**/
export class ProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=profileBytes" })
  profileBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=profileType" })
  profileType?: ProfileProfileTypeEnum;
}


// Profile
/** 
 * Profile resource.
**/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: Deployment;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profileBytes" })
  profileBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=profileType" })
  profileType?: ProfileProfileTypeEnum;
}
