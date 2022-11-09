import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RabattSatzEnum {
    Normal = "NORMAL"
,    Ermaessigt1 = "ERMAESSIGT1"
,    Ermaessigt2 = "ERMAESSIGT2"
,    Besonders = "BESONDERS"
,    Null = "NULL"
}


export class Rabatt extends SpeakeasyBase {
  @Metadata({ data: "json, name=Betrag-Brutto" })
  betragBrutto: number;

  @Metadata({ data: "json, name=Betrag-Netto" })
  betragNetto: number;

  @Metadata({ data: "json, name=Bezeichnung" })
  bezeichnung: string;

  @Metadata({ data: "json, name=Satz" })
  satz?: RabattSatzEnum;
}
