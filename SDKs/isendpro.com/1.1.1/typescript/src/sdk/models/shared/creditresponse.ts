import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: any;
}
