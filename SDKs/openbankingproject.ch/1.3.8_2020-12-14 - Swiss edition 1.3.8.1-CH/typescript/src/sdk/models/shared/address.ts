import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildingNumber" })
  buildingNumber?: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=postCode" })
  postCode?: string;

  @Metadata({ data: "json, name=streetName" })
  streetName?: string;

  @Metadata({ data: "json, name=townName" })
  townName?: string;
}
