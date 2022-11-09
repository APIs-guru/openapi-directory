import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ComptageReponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: any;
}
