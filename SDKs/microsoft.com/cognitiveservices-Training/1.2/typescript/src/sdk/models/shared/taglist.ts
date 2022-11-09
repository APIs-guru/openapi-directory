import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class TagList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TotalTaggedImages" })
  totalTaggedImages?: number;

  @Metadata({ data: "json, name=TotalUntaggedImages" })
  totalUntaggedImages?: number;
}
