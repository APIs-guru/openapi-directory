import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameGuidPair } from "./nameguidpair";



export class QueryFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Genres", elemType: NameGuidPair })
  genres?: NameGuidPair[];

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: string[];
}
