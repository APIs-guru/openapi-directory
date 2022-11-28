import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ComptageReponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: any;
}
