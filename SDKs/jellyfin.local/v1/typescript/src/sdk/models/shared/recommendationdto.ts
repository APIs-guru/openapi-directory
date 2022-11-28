import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDto } from "./baseitemdto";
import { RecommendationTypeEnum } from "./recommendationtypeenum";



export class RecommendationDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineItemName" })
  baselineItemName?: string;

  @SpeakeasyMetadata({ data: "json, name=CategoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BaseItemDto })
  items?: BaseItemDto[];

  @SpeakeasyMetadata({ data: "json, name=RecommendationType" })
  recommendationType?: RecommendationTypeEnum;
}
