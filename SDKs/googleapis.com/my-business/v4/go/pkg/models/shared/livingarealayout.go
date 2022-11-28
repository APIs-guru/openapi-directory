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

// LivingAreaLayout
// Information about the layout of the living area.
type LivingAreaLayout struct {
	Balcony                     *bool                                            `json:"balcony,omitempty"`
	BalconyException            *LivingAreaLayoutBalconyExceptionEnum            `json:"balconyException,omitempty"`
	LivingAreaSqMeters          *float32                                         `json:"livingAreaSqMeters,omitempty"`
	LivingAreaSqMetersException *LivingAreaLayoutLivingAreaSqMetersExceptionEnum `json:"livingAreaSqMetersException,omitempty"`
	Loft                        *bool                                            `json:"loft,omitempty"`
	LoftException               *LivingAreaLayoutLoftExceptionEnum               `json:"loftException,omitempty"`
	NonSmoking                  *bool                                            `json:"nonSmoking,omitempty"`
	NonSmokingException         *LivingAreaLayoutNonSmokingExceptionEnum         `json:"nonSmokingException,omitempty"`
	Patio                       *bool                                            `json:"patio,omitempty"`
	PatioException              *LivingAreaLayoutPatioExceptionEnum              `json:"patioException,omitempty"`
	Stairs                      *bool                                            `json:"stairs,omitempty"`
	StairsException             *LivingAreaLayoutStairsExceptionEnum             `json:"stairsException,omitempty"`
}
