import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchModifyMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addLabelIds" })
  addLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeLabelIds" })
  removeLabelIds?: string[];
}
