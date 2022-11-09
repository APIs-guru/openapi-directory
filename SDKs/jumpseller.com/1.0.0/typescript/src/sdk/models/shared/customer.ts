import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerFields } from "./customerfields";


export class Customer extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: CustomerFields;
}
