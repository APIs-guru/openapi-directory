import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Monatsbeleg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beleg-UUID" })
  belegUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=FON-Geprueft-Datum-Uhrzeit" })
  fonGeprueftDatumUhrzeit?: string;

  @SpeakeasyMetadata({ data: "json, name=FON-Geprueft-Erfolgreich" })
  fonGeprueftErfolgreich?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Jahr" })
  jahr?: number;

  @SpeakeasyMetadata({ data: "json, name=Monat" })
  monat?: number;
}
