import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MappingJobResultFigiNotFound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=warning" })
  warning?: string;
}
