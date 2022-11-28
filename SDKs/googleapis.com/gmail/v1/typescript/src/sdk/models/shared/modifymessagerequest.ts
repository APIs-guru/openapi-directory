import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addLabelIds" })
  addLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeLabelIds" })
  removeLabelIds?: string[];
}
