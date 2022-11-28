import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAdditionalFieldFields } from "./customeradditionalfieldfields";



export class CustomerAdditionalField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_additional_field" })
  customerAdditionalField?: CustomerAdditionalFieldFields;
}
