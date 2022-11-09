import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phoneNo" })
  phoneNo?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
