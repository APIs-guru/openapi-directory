import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Monatsbeleg extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beleg-UUID" })
  belegUuid?: string;

  @Metadata({ data: "json, name=FON-Geprueft-Datum-Uhrzeit" })
  fonGeprueftDatumUhrzeit?: string;

  @Metadata({ data: "json, name=FON-Geprueft-Erfolgreich" })
  fonGeprueftErfolgreich?: boolean;

  @Metadata({ data: "json, name=Jahr" })
  jahr?: number;

  @Metadata({ data: "json, name=Monat" })
  monat?: number;
}
