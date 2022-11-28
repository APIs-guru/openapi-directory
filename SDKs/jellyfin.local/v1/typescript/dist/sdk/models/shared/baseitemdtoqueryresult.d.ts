import { SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDto } from "./baseitemdto";
export declare class BaseItemDtoQueryResult extends SpeakeasyBase {
    items?: BaseItemDto[];
    startIndex?: number;
    totalRecordCount?: number;
}
