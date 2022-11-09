import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerFieldsWithPasswordNoId } from "./customerfieldswithpasswordnoid";


export class CustomerWithPasswordNoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: CustomerFieldsWithPasswordNoId;
}
