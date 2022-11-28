import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Erreur extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: any;
}
