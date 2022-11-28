import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TotalTaggedImages" })
  totalTaggedImages?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalUntaggedImages" })
  totalUntaggedImages?: number;
}
