import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseItemDto } from "./baseitemdto";
import { RecommendationTypeEnum } from "./recommendationtypeenum";


export class RecommendationDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineItemName" })
  baselineItemName?: string;

  @Metadata({ data: "json, name=CategoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=Items", elemType: shared.BaseItemDto })
  items?: BaseItemDto[];

  @Metadata({ data: "json, name=RecommendationType" })
  recommendationType?: RecommendationTypeEnum;
}
