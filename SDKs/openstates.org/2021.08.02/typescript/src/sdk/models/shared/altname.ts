import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AltName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;
}
