import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DuplicateLineItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicateLineItemId" })
  duplicateLineItemId?: string;
}
