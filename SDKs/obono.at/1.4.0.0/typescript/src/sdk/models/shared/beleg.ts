import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SignierteBelegdaten } from "./signiertebelegdaten";

export enum BelegBelegTypenEnum {
    Belegkreisinitialisierung = "Belegkreisinitialisierung"
,    Kassenbericht = "Kassenbericht"
,    Monatsabschluss = "Monatsabschluss"
,    Startbeleg = "Startbeleg"
,    Storno = "Storno"
,    Systembeleg = "Systembeleg"
,    Training = "Training"
}


export class Beleg extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beleg-Codes" })
  belegCodes?: string[];

  @Metadata({ data: "json, name=Beleg-Typen" })
  belegTypen?: BelegBelegTypenEnum[];

  @Metadata({ data: "json, name=Belegdaten" })
  belegdaten?: SignierteBelegdaten;

  @Metadata({ data: "json, name=JWS" })
  jws?: string;

  @Metadata({ data: "json, name=QR" })
  qr?: string;

  @Metadata({ data: "json, name=QR-Link" })
  qrLink?: string;

  @Metadata({ data: "json, name=Registrierkasse-UUID" })
  registrierkasseUuid?: string;

  @Metadata({ data: "json, name=Signaturerstellungseinheit-UUID" })
  signaturerstellungseinheitUuid?: string;

  @Metadata({ data: "json, name=_href" })
  href?: string;

  @Metadata({ data: "json, name=_uuid" })
  uuid?: string;
}
