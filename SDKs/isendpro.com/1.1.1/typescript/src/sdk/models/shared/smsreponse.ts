import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SmsReponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: any;
}
