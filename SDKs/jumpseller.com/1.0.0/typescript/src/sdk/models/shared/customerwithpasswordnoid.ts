import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerFieldsWithPasswordNoId } from "./customerfieldswithpasswordnoid";



export class CustomerWithPasswordNoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: CustomerFieldsWithPasswordNoId;
}
