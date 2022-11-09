import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerToCustomerCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
