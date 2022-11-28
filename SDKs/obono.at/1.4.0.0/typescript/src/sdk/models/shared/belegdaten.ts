import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";


export enum BelegdatenUnternehmenIdTypEnum {
    Steuernummer = "steuernummer",
    Uid = "uid",
    Gln = "gln"
}


// Belegdaten
/** 
 * The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
export class Belegdaten extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Belegkreis" })
  externerBelegBelegkreis?: string;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Bezeichnung" })
  externerBelegBezeichnung?: string;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Referenz" })
  externerBelegReferenz?: string;

  @SpeakeasyMetadata({ data: "json, name=Kunde" })
  kunde?: string;

  @SpeakeasyMetadata({ data: "json, name=Notizen" })
  notizen?: string[];

  @SpeakeasyMetadata({ data: "json, name=Posten", elemType: Posten })
  posten?: Posten[];

  @SpeakeasyMetadata({ data: "json, name=Rabatte", elemType: Rabatt })
  rabatte?: Rabatt[];

  @SpeakeasyMetadata({ data: "json, name=Storno" })
  storno?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Storno-Beleg-UUID" })
  stornoBelegUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=Storno-Text" })
  stornoText?: string;

  @SpeakeasyMetadata({ data: "json, name=Training" })
  training?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-Adresse1" })
  unternehmenAdresse1?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-Adresse2" })
  unternehmenAdresse2?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-Fusszeile" })
  unternehmenFusszeile?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-ID" })
  unternehmenId?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-ID-Typ" })
  unternehmenIdTyp?: BelegdatenUnternehmenIdTypEnum;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-Kopfzeile" })
  unternehmenKopfzeile?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-Name" })
  unternehmenName?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-Ort" })
  unternehmenOrt?: string;

  @SpeakeasyMetadata({ data: "json, name=Unternehmen-PLZ" })
  unternehmenPlz?: string;

  @SpeakeasyMetadata({ data: "json, name=Zahlungen", elemType: Zahlung })
  zahlungen?: Zahlung[];
}
