import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignierteBelegdaten } from "./signiertebelegdaten";


export enum BelegBelegTypenEnum {
    Belegkreisinitialisierung = "Belegkreisinitialisierung",
    Kassenbericht = "Kassenbericht",
    Monatsabschluss = "Monatsabschluss",
    Startbeleg = "Startbeleg",
    Storno = "Storno",
    Systembeleg = "Systembeleg",
    Training = "Training"
}


export class Beleg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beleg-Codes" })
  belegCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=Beleg-Typen" })
  belegTypen?: BelegBelegTypenEnum[];

  @SpeakeasyMetadata({ data: "json, name=Belegdaten" })
  belegdaten?: SignierteBelegdaten;

  @SpeakeasyMetadata({ data: "json, name=JWS" })
  jws?: string;

  @SpeakeasyMetadata({ data: "json, name=QR" })
  qr?: string;

  @SpeakeasyMetadata({ data: "json, name=QR-Link" })
  qrLink?: string;

  @SpeakeasyMetadata({ data: "json, name=Registrierkasse-UUID" })
  registrierkasseUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=Signaturerstellungseinheit-UUID" })
  signaturerstellungseinheitUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=_href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=_uuid" })
  uuid?: string;
}
