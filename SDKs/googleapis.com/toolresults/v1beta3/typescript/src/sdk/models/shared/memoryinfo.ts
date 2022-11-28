import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memoryCapInKibibyte" })
  memoryCapInKibibyte?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryTotalInKibibyte" })
  memoryTotalInKibibyte?: string;
}
