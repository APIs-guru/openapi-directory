import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";


export class BillAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: string[];

  @Metadata({ data: "json, name=date" })
  date: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=order" })
  order: number;

  @Metadata({ data: "json, name=organization" })
  organization: Organization;
}
