import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDeleteMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];
}
