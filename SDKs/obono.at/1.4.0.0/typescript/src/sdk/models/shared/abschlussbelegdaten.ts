import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Abschlussbelegdaten extends SpeakeasyBase {
  @Metadata({ data: "json, name=Abschluss-Beginn-Datum-Uhrzeit" })
  abschlussBeginnDatumUhrzeit: string;

  @Metadata({ data: "json, name=Abschluss-Ende-Datum-Uhrzeit" })
  abschlussEndeDatumUhrzeit: string;
}
