import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemoryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=memoryCapInKibibyte" })
  memoryCapInKibibyte?: string;

  @Metadata({ data: "json, name=memoryTotalInKibibyte" })
  memoryTotalInKibibyte?: string;
}
