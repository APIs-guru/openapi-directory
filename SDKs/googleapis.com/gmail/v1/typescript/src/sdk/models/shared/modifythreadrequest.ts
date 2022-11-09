import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyThreadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addLabelIds" })
  addLabelIds?: string[];

  @Metadata({ data: "json, name=removeLabelIds" })
  removeLabelIds?: string[];
}
