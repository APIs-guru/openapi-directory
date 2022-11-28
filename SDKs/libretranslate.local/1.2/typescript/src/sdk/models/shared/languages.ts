import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Languages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  name?: string;
}
