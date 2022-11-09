import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostenSatzEnum {
    Normal = "NORMAL"
,    Ermaessigt1 = "ERMAESSIGT1"
,    Ermaessigt2 = "ERMAESSIGT2"
,    Besonders = "BESONDERS"
,    Null = "NULL"
}


export class Posten extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bezeichnung" })
  bezeichnung: string;

  @Metadata({ data: "json, name=BruttoBetrag" })
  bruttoBetrag: number;

  @Metadata({ data: "json, name=Externer-Beleg-Belegkreis" })
  externerBelegBelegkreis?: string;

  @Metadata({ data: "json, name=Externer-Beleg-Bezeichnung" })
  externerBelegBezeichnung?: string;

  @Metadata({ data: "json, name=Externer-Beleg-Referenz" })
  externerBelegReferenz?: string;

  @Metadata({ data: "json, name=Menge" })
  menge: number;

  @Metadata({ data: "json, name=NettoBetrag" })
  nettoBetrag: number;

  @Metadata({ data: "json, name=Satz" })
  satz: PostenSatzEnum;
}
