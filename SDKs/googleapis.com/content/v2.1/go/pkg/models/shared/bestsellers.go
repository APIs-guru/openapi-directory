package shared

type BestSellersPreviousRelativeDemandEnum string

const (
	BestSellersPreviousRelativeDemandEnumRelativeDemandUnspecified BestSellersPreviousRelativeDemandEnum = "RELATIVE_DEMAND_UNSPECIFIED"
	BestSellersPreviousRelativeDemandEnumVeryLow                   BestSellersPreviousRelativeDemandEnum = "VERY_LOW"
	BestSellersPreviousRelativeDemandEnumLow                       BestSellersPreviousRelativeDemandEnum = "LOW"
	BestSellersPreviousRelativeDemandEnumMedium                    BestSellersPreviousRelativeDemandEnum = "MEDIUM"
	BestSellersPreviousRelativeDemandEnumHigh                      BestSellersPreviousRelativeDemandEnum = "HIGH"
	BestSellersPreviousRelativeDemandEnumVeryHigh                  BestSellersPreviousRelativeDemandEnum = "VERY_HIGH"
)

type BestSellersRelativeDemandEnum string

const (
	BestSellersRelativeDemandEnumRelativeDemandUnspecified BestSellersRelativeDemandEnum = "RELATIVE_DEMAND_UNSPECIFIED"
	BestSellersRelativeDemandEnumVeryLow                   BestSellersRelativeDemandEnum = "VERY_LOW"
	BestSellersRelativeDemandEnumLow                       BestSellersRelativeDemandEnum = "LOW"
	BestSellersRelativeDemandEnumMedium                    BestSellersRelativeDemandEnum = "MEDIUM"
	BestSellersRelativeDemandEnumHigh                      BestSellersRelativeDemandEnum = "HIGH"
	BestSellersRelativeDemandEnumVeryHigh                  BestSellersRelativeDemandEnum = "VERY_HIGH"
)

type BestSellersRelativeDemandChangeEnum string

const (
	BestSellersRelativeDemandChangeEnumRelativeDemandChangeTypeUnspecified BestSellersRelativeDemandChangeEnum = "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED"
	BestSellersRelativeDemandChangeEnumSinker                              BestSellersRelativeDemandChangeEnum = "SINKER"
	BestSellersRelativeDemandChangeEnumFlat                                BestSellersRelativeDemandChangeEnum = "FLAT"
	BestSellersRelativeDemandChangeEnumRiser                               BestSellersRelativeDemandChangeEnum = "RISER"
)

type BestSellersReportGranularityEnum string

const (
	BestSellersReportGranularityEnumReportGranularityUnspecified BestSellersReportGranularityEnum = "REPORT_GRANULARITY_UNSPECIFIED"
	BestSellersReportGranularityEnumWeekly                       BestSellersReportGranularityEnum = "WEEKLY"
	BestSellersReportGranularityEnumMonthly                      BestSellersReportGranularityEnum = "MONTHLY"
)

// BestSellers
// Fields related to the [Best Sellers reports](https://support.google.com/merchants/answer/9488679).
type BestSellers struct {
	CategoryID             *string                                `json:"categoryId,omitempty"`
	CountryCode            *string                                `json:"countryCode,omitempty"`
	PreviousRank           *string                                `json:"previousRank,omitempty"`
	PreviousRelativeDemand *BestSellersPreviousRelativeDemandEnum `json:"previousRelativeDemand,omitempty"`
	Rank                   *string                                `json:"rank,omitempty"`
	RelativeDemand         *BestSellersRelativeDemandEnum         `json:"relativeDemand,omitempty"`
	RelativeDemandChange   *BestSellersRelativeDemandChangeEnum   `json:"relativeDemandChange,omitempty"`
	ReportDate             *Date                                  `json:"reportDate,omitempty"`
	ReportGranularity      *BestSellersReportGranularityEnum      `json:"reportGranularity,omitempty"`
}
