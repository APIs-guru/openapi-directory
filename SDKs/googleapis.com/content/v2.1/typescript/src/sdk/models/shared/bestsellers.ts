import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";


export enum BestSellersPreviousRelativeDemandEnum {
    RelativeDemandUnspecified = "RELATIVE_DEMAND_UNSPECIFIED",
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    VeryHigh = "VERY_HIGH"
}

export enum BestSellersRelativeDemandEnum {
    RelativeDemandUnspecified = "RELATIVE_DEMAND_UNSPECIFIED",
    VeryLow = "VERY_LOW",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    VeryHigh = "VERY_HIGH"
}

export enum BestSellersRelativeDemandChangeEnum {
    RelativeDemandChangeTypeUnspecified = "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED",
    Sinker = "SINKER",
    Flat = "FLAT",
    Riser = "RISER"
}

export enum BestSellersReportGranularityEnum {
    ReportGranularityUnspecified = "REPORT_GRANULARITY_UNSPECIFIED",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}


// BestSellers
/** 
 * Fields related to the [Best Sellers reports](https://support.google.com/merchants/answer/9488679).
**/
export class BestSellers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=previousRank" })
  previousRank?: string;

  @SpeakeasyMetadata({ data: "json, name=previousRelativeDemand" })
  previousRelativeDemand?: BestSellersPreviousRelativeDemandEnum;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: string;

  @SpeakeasyMetadata({ data: "json, name=relativeDemand" })
  relativeDemand?: BestSellersRelativeDemandEnum;

  @SpeakeasyMetadata({ data: "json, name=relativeDemandChange" })
  relativeDemandChange?: BestSellersRelativeDemandChangeEnum;

  @SpeakeasyMetadata({ data: "json, name=reportDate" })
  reportDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportGranularity" })
  reportGranularity?: BestSellersReportGranularityEnum;
}
