package shared

type LivingAreaLayoutBalconyExceptionEnum string

const (
	LivingAreaLayoutBalconyExceptionEnumExceptionUnspecified LivingAreaLayoutBalconyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaLayoutBalconyExceptionEnumUnderConstruction    LivingAreaLayoutBalconyExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaLayoutBalconyExceptionEnumDependentOnSeason    LivingAreaLayoutBalconyExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaLayoutBalconyExceptionEnumDependentOnDayOfWeek LivingAreaLayoutBalconyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaLayoutLivingAreaSqMetersExceptionEnum string

const (
	LivingAreaLayoutLivingAreaSqMetersExceptionEnumExceptionUnspecified LivingAreaLayoutLivingAreaSqMetersExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaLayoutLivingAreaSqMetersExceptionEnumUnderConstruction    LivingAreaLayoutLivingAreaSqMetersExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaLayoutLivingAreaSqMetersExceptionEnumDependentOnSeason    LivingAreaLayoutLivingAreaSqMetersExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaLayoutLivingAreaSqMetersExceptionEnumDependentOnDayOfWeek LivingAreaLayoutLivingAreaSqMetersExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaLayoutLoftExceptionEnum string

const (
	LivingAreaLayoutLoftExceptionEnumExceptionUnspecified LivingAreaLayoutLoftExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaLayoutLoftExceptionEnumUnderConstruction    LivingAreaLayoutLoftExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaLayoutLoftExceptionEnumDependentOnSeason    LivingAreaLayoutLoftExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaLayoutLoftExceptionEnumDependentOnDayOfWeek LivingAreaLayoutLoftExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaLayoutNonSmokingExceptionEnum string

const (
	LivingAreaLayoutNonSmokingExceptionEnumExceptionUnspecified LivingAreaLayoutNonSmokingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaLayoutNonSmokingExceptionEnumUnderConstruction    LivingAreaLayoutNonSmokingExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaLayoutNonSmokingExceptionEnumDependentOnSeason    LivingAreaLayoutNonSmokingExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaLayoutNonSmokingExceptionEnumDependentOnDayOfWeek LivingAreaLayoutNonSmokingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaLayoutPatioExceptionEnum string

const (
	LivingAreaLayoutPatioExceptionEnumExceptionUnspecified LivingAreaLayoutPatioExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaLayoutPatioExceptionEnumUnderConstruction    LivingAreaLayoutPatioExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaLayoutPatioExceptionEnumDependentOnSeason    LivingAreaLayoutPatioExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaLayoutPatioExceptionEnumDependentOnDayOfWeek LivingAreaLayoutPatioExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaLayoutStairsExceptionEnum string

const (
	LivingAreaLayoutStairsExceptionEnumExceptionUnspecified LivingAreaLayoutStairsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	LivingAreaLayoutStairsExceptionEnumUnderConstruction    LivingAreaLayoutStairsExceptionEnum = "UNDER_CONSTRUCTION"
	LivingAreaLayoutStairsExceptionEnumDependentOnSeason    LivingAreaLayoutStairsExceptionEnum = "DEPENDENT_ON_SEASON"
	LivingAreaLayoutStairsExceptionEnumDependentOnDayOfWeek LivingAreaLayoutStairsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type LivingAreaLayout struct {
	Balcony                     *bool                                            `json:"balcony"`
	BalconyException            *LivingAreaLayoutBalconyExceptionEnum            `json:"balconyException"`
	LivingAreaSqMeters          *float32                                         `json:"livingAreaSqMeters"`
	LivingAreaSqMetersException *LivingAreaLayoutLivingAreaSqMetersExceptionEnum `json:"livingAreaSqMetersException"`
	Loft                        *bool                                            `json:"loft"`
	LoftException               *LivingAreaLayoutLoftExceptionEnum               `json:"loftException"`
	NonSmoking                  *bool                                            `json:"nonSmoking"`
	NonSmokingException         *LivingAreaLayoutNonSmokingExceptionEnum         `json:"nonSmokingException"`
	Patio                       *bool                                            `json:"patio"`
	PatioException              *LivingAreaLayoutPatioExceptionEnum              `json:"patioException"`
	Stairs                      *bool                                            `json:"stairs"`
	StairsException             *LivingAreaLayoutStairsExceptionEnum             `json:"stairsException"`
}
