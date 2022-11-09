import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Zahlung extends SpeakeasyBase {
  @Metadata({ data: "json, name=Betrag" })
  betrag: number;

  @Metadata({ data: "json, name=Bezeichnung" })
  bezeichnung: string;

  @Metadata({ data: "json, name=Referenz" })
  referenz?: string;
}
