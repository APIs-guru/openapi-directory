import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionCreationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
