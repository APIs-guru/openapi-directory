import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Abschlussbelegdaten extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Abschluss-Beginn-Datum-Uhrzeit" })
  abschlussBeginnDatumUhrzeit: string;

  @SpeakeasyMetadata({ data: "json, name=Abschluss-Ende-Datum-Uhrzeit" })
  abschlussEndeDatumUhrzeit: string;
}
