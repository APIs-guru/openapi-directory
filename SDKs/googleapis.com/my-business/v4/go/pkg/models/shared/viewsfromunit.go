package shared

type ViewsFromUnitBeachViewExceptionEnum string

const (
	ViewsFromUnitBeachViewExceptionEnumExceptionUnspecified ViewsFromUnitBeachViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitBeachViewExceptionEnumUnderConstruction    ViewsFromUnitBeachViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitBeachViewExceptionEnumDependentOnSeason    ViewsFromUnitBeachViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitBeachViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitBeachViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitCityViewExceptionEnum string

const (
	ViewsFromUnitCityViewExceptionEnumExceptionUnspecified ViewsFromUnitCityViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitCityViewExceptionEnumUnderConstruction    ViewsFromUnitCityViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitCityViewExceptionEnumDependentOnSeason    ViewsFromUnitCityViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitCityViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitCityViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitGardenViewExceptionEnum string

const (
	ViewsFromUnitGardenViewExceptionEnumExceptionUnspecified ViewsFromUnitGardenViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitGardenViewExceptionEnumUnderConstruction    ViewsFromUnitGardenViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitGardenViewExceptionEnumDependentOnSeason    ViewsFromUnitGardenViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitGardenViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitGardenViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitLakeViewExceptionEnum string

const (
	ViewsFromUnitLakeViewExceptionEnumExceptionUnspecified ViewsFromUnitLakeViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitLakeViewExceptionEnumUnderConstruction    ViewsFromUnitLakeViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitLakeViewExceptionEnumDependentOnSeason    ViewsFromUnitLakeViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitLakeViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitLakeViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitLandmarkViewExceptionEnum string

const (
	ViewsFromUnitLandmarkViewExceptionEnumExceptionUnspecified ViewsFromUnitLandmarkViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitLandmarkViewExceptionEnumUnderConstruction    ViewsFromUnitLandmarkViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitLandmarkViewExceptionEnumDependentOnSeason    ViewsFromUnitLandmarkViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitLandmarkViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitLandmarkViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitOceanViewExceptionEnum string

const (
	ViewsFromUnitOceanViewExceptionEnumExceptionUnspecified ViewsFromUnitOceanViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitOceanViewExceptionEnumUnderConstruction    ViewsFromUnitOceanViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitOceanViewExceptionEnumDependentOnSeason    ViewsFromUnitOceanViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitOceanViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitOceanViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitPoolViewExceptionEnum string

const (
	ViewsFromUnitPoolViewExceptionEnumExceptionUnspecified ViewsFromUnitPoolViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitPoolViewExceptionEnumUnderConstruction    ViewsFromUnitPoolViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitPoolViewExceptionEnumDependentOnSeason    ViewsFromUnitPoolViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitPoolViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitPoolViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnitValleyViewExceptionEnum string

const (
	ViewsFromUnitValleyViewExceptionEnumExceptionUnspecified ViewsFromUnitValleyViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ViewsFromUnitValleyViewExceptionEnumUnderConstruction    ViewsFromUnitValleyViewExceptionEnum = "UNDER_CONSTRUCTION"
	ViewsFromUnitValleyViewExceptionEnumDependentOnSeason    ViewsFromUnitValleyViewExceptionEnum = "DEPENDENT_ON_SEASON"
	ViewsFromUnitValleyViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitValleyViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ViewsFromUnit struct {
	BeachView             *bool                                   `json:"beachView"`
	BeachViewException    *ViewsFromUnitBeachViewExceptionEnum    `json:"beachViewException"`
	CityView              *bool                                   `json:"cityView"`
	CityViewException     *ViewsFromUnitCityViewExceptionEnum     `json:"cityViewException"`
	GardenView            *bool                                   `json:"gardenView"`
	GardenViewException   *ViewsFromUnitGardenViewExceptionEnum   `json:"gardenViewException"`
	LakeView              *bool                                   `json:"lakeView"`
	LakeViewException     *ViewsFromUnitLakeViewExceptionEnum     `json:"lakeViewException"`
	LandmarkView          *bool                                   `json:"landmarkView"`
	LandmarkViewException *ViewsFromUnitLandmarkViewExceptionEnum `json:"landmarkViewException"`
	OceanView             *bool                                   `json:"oceanView"`
	OceanViewException    *ViewsFromUnitOceanViewExceptionEnum    `json:"oceanViewException"`
	PoolView              *bool                                   `json:"poolView"`
	PoolViewException     *ViewsFromUnitPoolViewExceptionEnum     `json:"poolViewException"`
	ValleyView            *bool                                   `json:"valleyView"`
	ValleyViewException   *ViewsFromUnitValleyViewExceptionEnum   `json:"valleyViewException"`
}
