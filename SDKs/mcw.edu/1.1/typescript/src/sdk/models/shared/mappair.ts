import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MapPair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyValue?: string;

  @SpeakeasyMetadata()
  stringValue?: string;
}
