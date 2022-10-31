package shared




type ViewsFromUnitBeachViewExceptionEnum string

const (
    ViewsFromUnitBeachViewExceptionEnumExceptionUnspecified ViewsFromUnitBeachViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitBeachViewExceptionEnumUnderConstruction ViewsFromUnitBeachViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitBeachViewExceptionEnumDependentOnSeason ViewsFromUnitBeachViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitBeachViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitBeachViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitCityViewExceptionEnum string

const (
    ViewsFromUnitCityViewExceptionEnumExceptionUnspecified ViewsFromUnitCityViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitCityViewExceptionEnumUnderConstruction ViewsFromUnitCityViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitCityViewExceptionEnumDependentOnSeason ViewsFromUnitCityViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitCityViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitCityViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitGardenViewExceptionEnum string

const (
    ViewsFromUnitGardenViewExceptionEnumExceptionUnspecified ViewsFromUnitGardenViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitGardenViewExceptionEnumUnderConstruction ViewsFromUnitGardenViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitGardenViewExceptionEnumDependentOnSeason ViewsFromUnitGardenViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitGardenViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitGardenViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitLakeViewExceptionEnum string

const (
    ViewsFromUnitLakeViewExceptionEnumExceptionUnspecified ViewsFromUnitLakeViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitLakeViewExceptionEnumUnderConstruction ViewsFromUnitLakeViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitLakeViewExceptionEnumDependentOnSeason ViewsFromUnitLakeViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitLakeViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitLakeViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitLandmarkViewExceptionEnum string

const (
    ViewsFromUnitLandmarkViewExceptionEnumExceptionUnspecified ViewsFromUnitLandmarkViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitLandmarkViewExceptionEnumUnderConstruction ViewsFromUnitLandmarkViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitLandmarkViewExceptionEnumDependentOnSeason ViewsFromUnitLandmarkViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitLandmarkViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitLandmarkViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitOceanViewExceptionEnum string

const (
    ViewsFromUnitOceanViewExceptionEnumExceptionUnspecified ViewsFromUnitOceanViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitOceanViewExceptionEnumUnderConstruction ViewsFromUnitOceanViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitOceanViewExceptionEnumDependentOnSeason ViewsFromUnitOceanViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitOceanViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitOceanViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitPoolViewExceptionEnum string

const (
    ViewsFromUnitPoolViewExceptionEnumExceptionUnspecified ViewsFromUnitPoolViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitPoolViewExceptionEnumUnderConstruction ViewsFromUnitPoolViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitPoolViewExceptionEnumDependentOnSeason ViewsFromUnitPoolViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitPoolViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitPoolViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)



type ViewsFromUnitValleyViewExceptionEnum string

const (
    ViewsFromUnitValleyViewExceptionEnumExceptionUnspecified ViewsFromUnitValleyViewExceptionEnum = "EXCEPTION_UNSPECIFIED"
ViewsFromUnitValleyViewExceptionEnumUnderConstruction ViewsFromUnitValleyViewExceptionEnum = "UNDER_CONSTRUCTION"
ViewsFromUnitValleyViewExceptionEnumDependentOnSeason ViewsFromUnitValleyViewExceptionEnum = "DEPENDENT_ON_SEASON"
ViewsFromUnitValleyViewExceptionEnumDependentOnDayOfWeek ViewsFromUnitValleyViewExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)


type ViewsFromUnit struct {
    BeachView *bool `json:"beachView,omitempty"`
    BeachViewException *ViewsFromUnitBeachViewExceptionEnum `json:"beachViewException,omitempty"`
    CityView *bool `json:"cityView,omitempty"`
    CityViewException *ViewsFromUnitCityViewExceptionEnum `json:"cityViewException,omitempty"`
    GardenView *bool `json:"gardenView,omitempty"`
    GardenViewException *ViewsFromUnitGardenViewExceptionEnum `json:"gardenViewException,omitempty"`
    LakeView *bool `json:"lakeView,omitempty"`
    LakeViewException *ViewsFromUnitLakeViewExceptionEnum `json:"lakeViewException,omitempty"`
    LandmarkView *bool `json:"landmarkView,omitempty"`
    LandmarkViewException *ViewsFromUnitLandmarkViewExceptionEnum `json:"landmarkViewException,omitempty"`
    OceanView *bool `json:"oceanView,omitempty"`
    OceanViewException *ViewsFromUnitOceanViewExceptionEnum `json:"oceanViewException,omitempty"`
    PoolView *bool `json:"poolView,omitempty"`
    PoolViewException *ViewsFromUnitPoolViewExceptionEnum `json:"poolViewException,omitempty"`
    ValleyView *bool `json:"valleyView,omitempty"`
    ValleyViewException *ViewsFromUnitValleyViewExceptionEnum `json:"valleyViewException,omitempty"`
    
}

