import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WellTagSearch extends SpeakeasyBase {
  @Metadata({ data: "json, name=owner_full_name" })
  ownerFullName: string;

  @Metadata({ data: "json, name=well_tag_number" })
  wellTagNumber?: number;
}
