import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HlrReponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: any;
}
