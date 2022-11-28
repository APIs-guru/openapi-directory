import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRegion } from "./nestedregion";



export class Region extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: NestedRegion;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
