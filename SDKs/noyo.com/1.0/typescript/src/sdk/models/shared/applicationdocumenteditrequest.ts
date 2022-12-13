import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationDocumentEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;
}
