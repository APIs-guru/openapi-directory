import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestOrderPickupDetailsPickupPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
