import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameGuidPair } from "./nameguidpair";


export class QueryFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Genres", elemType: shared.NameGuidPair })
  genres?: NameGuidPair[];

  @Metadata({ data: "json, name=Tags" })
  tags?: string[];
}
