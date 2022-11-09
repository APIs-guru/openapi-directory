import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MappingJobResultFigiNotFound extends SpeakeasyBase {
  @Metadata({ data: "json, name=warning" })
  warning?: string;
}
