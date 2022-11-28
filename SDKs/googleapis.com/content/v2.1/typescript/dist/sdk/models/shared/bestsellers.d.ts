import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum BestSellersPreviousRelativeDemandEnum {
    RelativeDemandUnspecified = "RELATIVE_DEMAND_UNSPECIFIED",
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    VeryHigh = "VERY_HIGH"
}
export declare enum BestSellersRelativeDemandEnum {
    RelativeDemandUnspecified = "RELATIVE_DEMAND_UNSPECIFIED",
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    VeryHigh = "VERY_HIGH"
}
export declare enum BestSellersRelativeDemandChangeEnum {
    RelativeDemandChangeTypeUnspecified = "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED",
    Sinker = "SINKER",
    Flat = "FLAT",
    Riser = "RISER"
}
export declare enum BestSellersReportGranularityEnum {
    ReportGranularityUnspecified = "REPORT_GRANULARITY_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}
/**
 * Fields related to the [Best Sellers reports](https://support.google.com/merchants/answer/9488679).
**/
export declare class BestSellers extends SpeakeasyBase {
    categoryId?: string;
    countryCode?: string;
    previousRank?: string;
    previousRelativeDemand?: BestSellersPreviousRelativeDemandEnum;
    rank?: string;
    relativeDemand?: BestSellersRelativeDemandEnum;
    relativeDemandChange?: BestSellersRelativeDemandChangeEnum;
    reportDate?: Date;
    reportGranularity?: BestSellersReportGranularityEnum;
}
