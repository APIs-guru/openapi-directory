import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostenSatzEnum {
    Normal = "NORMAL",
    Ermaessigt1 = "ERMAESSIGT1",
    Ermaessigt2 = "ERMAESSIGT2",
    Besonders = "BESONDERS",
    Null = "NULL"
}


export class Posten extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bezeichnung" })
  bezeichnung: string;

  @SpeakeasyMetadata({ data: "json, name=BruttoBetrag" })
  bruttoBetrag: number;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Belegkreis" })
  externerBelegBelegkreis?: string;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Bezeichnung" })
  externerBelegBezeichnung?: string;

  @SpeakeasyMetadata({ data: "json, name=Externer-Beleg-Referenz" })
  externerBelegReferenz?: string;

  @SpeakeasyMetadata({ data: "json, name=Menge" })
  menge: number;

  @SpeakeasyMetadata({ data: "json, name=NettoBetrag" })
  nettoBetrag: number;

  @SpeakeasyMetadata({ data: "json, name=Satz" })
  satz: PostenSatzEnum;
}
