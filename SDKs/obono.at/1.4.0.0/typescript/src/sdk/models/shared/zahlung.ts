import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Zahlung extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Betrag" })
  betrag: number;

  @SpeakeasyMetadata({ data: "json, name=Bezeichnung" })
  bezeichnung: string;

  @SpeakeasyMetadata({ data: "json, name=Referenz" })
  referenz?: string;
}
