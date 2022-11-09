import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";

export enum BelegdatenUnternehmenIdTypEnum {
    Steuernummer = "steuernummer"
,    Uid = "uid"
,    Gln = "gln"
}


// Belegdaten
/** 
 * The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
export class Belegdaten extends SpeakeasyBase {
  @Metadata({ data: "json, name=Externer-Beleg-Belegkreis" })
  externerBelegBelegkreis?: string;

  @Metadata({ data: "json, name=Externer-Beleg-Bezeichnung" })
  externerBelegBezeichnung?: string;

  @Metadata({ data: "json, name=Externer-Beleg-Referenz" })
  externerBelegReferenz?: string;

  @Metadata({ data: "json, name=Kunde" })
  kunde?: string;

  @Metadata({ data: "json, name=Notizen" })
  notizen?: string[];

  @Metadata({ data: "json, name=Posten", elemType: shared.Posten })
  posten?: Posten[];

  @Metadata({ data: "json, name=Rabatte", elemType: shared.Rabatt })
  rabatte?: Rabatt[];

  @Metadata({ data: "json, name=Storno" })
  storno?: boolean;

  @Metadata({ data: "json, name=Storno-Beleg-UUID" })
  stornoBelegUuid?: string;

  @Metadata({ data: "json, name=Storno-Text" })
  stornoText?: string;

  @Metadata({ data: "json, name=Training" })
  training?: boolean;

  @Metadata({ data: "json, name=Unternehmen-Adresse1" })
  unternehmenAdresse1?: string;

  @Metadata({ data: "json, name=Unternehmen-Adresse2" })
  unternehmenAdresse2?: string;

  @Metadata({ data: "json, name=Unternehmen-Fusszeile" })
  unternehmenFusszeile?: string;

  @Metadata({ data: "json, name=Unternehmen-ID" })
  unternehmenId?: string;

  @Metadata({ data: "json, name=Unternehmen-ID-Typ" })
  unternehmenIdTyp?: BelegdatenUnternehmenIdTypEnum;

  @Metadata({ data: "json, name=Unternehmen-Kopfzeile" })
  unternehmenKopfzeile?: string;

  @Metadata({ data: "json, name=Unternehmen-Name" })
  unternehmenName?: string;

  @Metadata({ data: "json, name=Unternehmen-Ort" })
  unternehmenOrt?: string;

  @Metadata({ data: "json, name=Unternehmen-PLZ" })
  unternehmenPlz?: string;

  @Metadata({ data: "json, name=Zahlungen", elemType: shared.Zahlung })
  zahlungen?: Zahlung[];
}
