import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Erreur extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: any;
}
