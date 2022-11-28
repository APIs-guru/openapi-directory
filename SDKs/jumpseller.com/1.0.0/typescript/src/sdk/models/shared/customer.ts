import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerFields } from "./customerfields";



export class Customer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: CustomerFields;
}
