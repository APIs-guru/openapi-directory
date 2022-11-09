import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseEnum } from "./houseenum";


export class StageReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=house" })
  house?: HouseEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
