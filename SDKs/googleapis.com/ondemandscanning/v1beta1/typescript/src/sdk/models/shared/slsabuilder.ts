import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SlsaBuilder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
