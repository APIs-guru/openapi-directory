import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildingNumber" })
  buildingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=postCode" })
  postCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=townName" })
  townName?: string;
}
