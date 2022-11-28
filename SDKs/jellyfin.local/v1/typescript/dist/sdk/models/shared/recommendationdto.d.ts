import { SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDto } from "./baseitemdto";
import { RecommendationTypeEnum } from "./recommendationtypeenum";
export declare class RecommendationDto extends SpeakeasyBase {
    baselineItemName?: string;
    categoryId?: string;
    items?: BaseItemDto[];
    recommendationType?: RecommendationTypeEnum;
}
