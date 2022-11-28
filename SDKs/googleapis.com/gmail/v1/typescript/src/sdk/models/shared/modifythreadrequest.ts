import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyThreadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addLabelIds" })
  addLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeLabelIds" })
  removeLabelIds?: string[];
}
