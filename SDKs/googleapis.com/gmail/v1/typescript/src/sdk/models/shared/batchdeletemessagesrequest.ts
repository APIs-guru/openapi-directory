import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDeleteMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];
}
