import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListenoireReponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: any;
}
