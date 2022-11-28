import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SmsReponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: any;
}
