import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHouseEnum } from "./committeehouseenum";



export class Committee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: CommitteeHouseEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
