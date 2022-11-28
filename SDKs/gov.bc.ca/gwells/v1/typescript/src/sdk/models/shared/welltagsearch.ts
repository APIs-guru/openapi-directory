import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WellTagSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=owner_full_name" })
  ownerFullName: string;

  @SpeakeasyMetadata({ data: "json, name=well_tag_number" })
  wellTagNumber?: number;
}
