import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RabattSatzEnum {
    Normal = "NORMAL",
    Ermaessigt1 = "ERMAESSIGT1",
    Ermaessigt2 = "ERMAESSIGT2",
    Besonders = "BESONDERS",
    Null = "NULL"
}


export class Rabatt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Betrag-Brutto" })
  betragBrutto: number;

  @SpeakeasyMetadata({ data: "json, name=Betrag-Netto" })
  betragNetto: number;

  @SpeakeasyMetadata({ data: "json, name=Bezeichnung" })
  bezeichnung: string;

  @SpeakeasyMetadata({ data: "json, name=Satz" })
  satz?: RabattSatzEnum;
}
