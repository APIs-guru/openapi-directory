import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";


export enum SignierteBelegdatenUnternehmenIdTypEnum {
    Steuernummer = "steuernummer",
    Uid = "uid",
    Gln = "gln"
}


// SignierteBelegdaten
/** 
 * The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
export class SignierteBelegdaten extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beleg-Datum-Uhrzeit" })
  belegDatumUhrzeit?: string;

  @SpeakeasyMetadata({ data: "json, name=Belegnummer" })
  belegnummer?: string;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Brutto" })
  betragBrutto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Netto" })
  betragNetto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Besonders-Brutto" })
  betragSatzBesondersBrutto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Besonders-Netto" })
  betragSatzBesondersNetto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Ermaessigt-1-Brutto" })
  betragSatzErmaessigt1Brutto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Ermaessigt-1-Netto" })
  betragSatzErmaessigt1Netto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Ermaessigt-2-Brutto" })
  betragSatzErmaessigt2Brutto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Ermaessigt-2-Netto" })
  betragSatzErmaessigt2Netto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Normal-Brutto" })
  betragSatzNormalBrutto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Normal-Netto" })
  betragSatzNormalNetto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Null-Brutto" })
  betragSatzNullBrutto?: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Satz-Null-Netto" })
  betragSatzNullNetto?: number;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Belegkreis" })
  externerBelegBelegkreis?: string;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Bezeichnung" })
  externerBelegBezeichnung?: string;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Referenz" })
  externerBelegReferenz?: string;

  @SpeakeasyMetadata({ data: "json, name=Kassen-ID" })
  kassenId?: string;

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
  unternehmenIdTyp?: SignierteBelegdatenUnternehmenIdTypEnum;

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

  @SpeakeasyMetadata({ data: "json, name=Zertifikat-Seriennummer" })
  zertifikatSeriennummer?: string;
}
