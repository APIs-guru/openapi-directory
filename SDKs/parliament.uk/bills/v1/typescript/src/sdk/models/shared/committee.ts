import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CommitteeHouseEnum } from "./committeehouseenum";


export class Committee extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=house" })
  house?: CommitteeHouseEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
