import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";



export class BillAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: string[];

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: number;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: Organization;
}
