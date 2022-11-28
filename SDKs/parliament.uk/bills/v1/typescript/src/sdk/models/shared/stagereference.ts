import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";



export class StageReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
