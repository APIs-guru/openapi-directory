package shared

type PoliciesAllInclusiveAvailableExceptionEnum string

const (
	PoliciesAllInclusiveAvailableExceptionEnumExceptionUnspecified PoliciesAllInclusiveAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesAllInclusiveAvailableExceptionEnumUnderConstruction    PoliciesAllInclusiveAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesAllInclusiveAvailableExceptionEnumDependentOnSeason    PoliciesAllInclusiveAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesAllInclusiveAvailableExceptionEnumDependentOnDayOfWeek PoliciesAllInclusiveAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesAllInclusiveOnlyExceptionEnum string

const (
	PoliciesAllInclusiveOnlyExceptionEnumExceptionUnspecified PoliciesAllInclusiveOnlyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesAllInclusiveOnlyExceptionEnumUnderConstruction    PoliciesAllInclusiveOnlyExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesAllInclusiveOnlyExceptionEnumDependentOnSeason    PoliciesAllInclusiveOnlyExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesAllInclusiveOnlyExceptionEnumDependentOnDayOfWeek PoliciesAllInclusiveOnlyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesCheckinTimeExceptionEnum string

const (
	PoliciesCheckinTimeExceptionEnumExceptionUnspecified PoliciesCheckinTimeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesCheckinTimeExceptionEnumUnderConstruction    PoliciesCheckinTimeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesCheckinTimeExceptionEnumDependentOnSeason    PoliciesCheckinTimeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesCheckinTimeExceptionEnumDependentOnDayOfWeek PoliciesCheckinTimeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesCheckoutTimeExceptionEnum string

const (
	PoliciesCheckoutTimeExceptionEnumExceptionUnspecified PoliciesCheckoutTimeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesCheckoutTimeExceptionEnumUnderConstruction    PoliciesCheckoutTimeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesCheckoutTimeExceptionEnumDependentOnSeason    PoliciesCheckoutTimeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesCheckoutTimeExceptionEnumDependentOnDayOfWeek PoliciesCheckoutTimeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesKidsStayFreeExceptionEnum string

const (
	PoliciesKidsStayFreeExceptionEnumExceptionUnspecified PoliciesKidsStayFreeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesKidsStayFreeExceptionEnumUnderConstruction    PoliciesKidsStayFreeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesKidsStayFreeExceptionEnumDependentOnSeason    PoliciesKidsStayFreeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesKidsStayFreeExceptionEnumDependentOnDayOfWeek PoliciesKidsStayFreeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesMaxChildAgeExceptionEnum string

const (
	PoliciesMaxChildAgeExceptionEnumExceptionUnspecified PoliciesMaxChildAgeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesMaxChildAgeExceptionEnumUnderConstruction    PoliciesMaxChildAgeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesMaxChildAgeExceptionEnumDependentOnSeason    PoliciesMaxChildAgeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesMaxChildAgeExceptionEnumDependentOnDayOfWeek PoliciesMaxChildAgeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesMaxKidsStayFreeCountExceptionEnum string

const (
	PoliciesMaxKidsStayFreeCountExceptionEnumExceptionUnspecified PoliciesMaxKidsStayFreeCountExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesMaxKidsStayFreeCountExceptionEnumUnderConstruction    PoliciesMaxKidsStayFreeCountExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesMaxKidsStayFreeCountExceptionEnumDependentOnSeason    PoliciesMaxKidsStayFreeCountExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesMaxKidsStayFreeCountExceptionEnumDependentOnDayOfWeek PoliciesMaxKidsStayFreeCountExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesSmokeFreePropertyExceptionEnum string

const (
	PoliciesSmokeFreePropertyExceptionEnumExceptionUnspecified PoliciesSmokeFreePropertyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesSmokeFreePropertyExceptionEnumUnderConstruction    PoliciesSmokeFreePropertyExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesSmokeFreePropertyExceptionEnumDependentOnSeason    PoliciesSmokeFreePropertyExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesSmokeFreePropertyExceptionEnumDependentOnDayOfWeek PoliciesSmokeFreePropertyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type Policies struct {
	AllInclusiveAvailable          *bool                                       `json:"allInclusiveAvailable"`
	AllInclusiveAvailableException *PoliciesAllInclusiveAvailableExceptionEnum `json:"allInclusiveAvailableException"`
	AllInclusiveOnly               *bool                                       `json:"allInclusiveOnly"`
	AllInclusiveOnlyException      *PoliciesAllInclusiveOnlyExceptionEnum      `json:"allInclusiveOnlyException"`
	CheckinTime                    *TimeOfDay                                  `json:"checkinTime"`
	CheckinTimeException           *PoliciesCheckinTimeExceptionEnum           `json:"checkinTimeException"`
	CheckoutTime                   *TimeOfDay                                  `json:"checkoutTime"`
	CheckoutTimeException          *PoliciesCheckoutTimeExceptionEnum          `json:"checkoutTimeException"`
	KidsStayFree                   *bool                                       `json:"kidsStayFree"`
	KidsStayFreeException          *PoliciesKidsStayFreeExceptionEnum          `json:"kidsStayFreeException"`
	MaxChildAge                    *int32                                      `json:"maxChildAge"`
	MaxChildAgeException           *PoliciesMaxChildAgeExceptionEnum           `json:"maxChildAgeException"`
	MaxKidsStayFreeCount           *int32                                      `json:"maxKidsStayFreeCount"`
	MaxKidsStayFreeCountException  *PoliciesMaxKidsStayFreeCountExceptionEnum  `json:"maxKidsStayFreeCountException"`
	PaymentOptions                 *PaymentOptions                             `json:"paymentOptions"`
	SmokeFreeProperty              *bool                                       `json:"smokeFreeProperty"`
	SmokeFreePropertyException     *PoliciesSmokeFreePropertyExceptionEnum     `json:"smokeFreePropertyException"`
}
