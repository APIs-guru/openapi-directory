import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerToCustomerCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
