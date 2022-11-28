import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HlrReponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: any;
}
