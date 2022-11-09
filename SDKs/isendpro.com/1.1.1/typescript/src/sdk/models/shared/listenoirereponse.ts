import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListenoireReponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: any;
}
