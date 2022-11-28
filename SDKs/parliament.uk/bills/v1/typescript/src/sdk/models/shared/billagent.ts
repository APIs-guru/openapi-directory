import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNo" })
  phoneNo?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
