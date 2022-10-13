package shared

type FamiliesBabysittingExceptionEnum string

const (
	FamiliesBabysittingExceptionEnumExceptionUnspecified FamiliesBabysittingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	FamiliesBabysittingExceptionEnumUnderConstruction    FamiliesBabysittingExceptionEnum = "UNDER_CONSTRUCTION"
	FamiliesBabysittingExceptionEnumDependentOnSeason    FamiliesBabysittingExceptionEnum = "DEPENDENT_ON_SEASON"
	FamiliesBabysittingExceptionEnumDependentOnDayOfWeek FamiliesBabysittingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type FamiliesKidsActivitiesExceptionEnum string

const (
	FamiliesKidsActivitiesExceptionEnumExceptionUnspecified FamiliesKidsActivitiesExceptionEnum = "EXCEPTION_UNSPECIFIED"
	FamiliesKidsActivitiesExceptionEnumUnderConstruction    FamiliesKidsActivitiesExceptionEnum = "UNDER_CONSTRUCTION"
	FamiliesKidsActivitiesExceptionEnumDependentOnSeason    FamiliesKidsActivitiesExceptionEnum = "DEPENDENT_ON_SEASON"
	FamiliesKidsActivitiesExceptionEnumDependentOnDayOfWeek FamiliesKidsActivitiesExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type FamiliesKidsClubExceptionEnum string

const (
	FamiliesKidsClubExceptionEnumExceptionUnspecified FamiliesKidsClubExceptionEnum = "EXCEPTION_UNSPECIFIED"
	FamiliesKidsClubExceptionEnumUnderConstruction    FamiliesKidsClubExceptionEnum = "UNDER_CONSTRUCTION"
	FamiliesKidsClubExceptionEnumDependentOnSeason    FamiliesKidsClubExceptionEnum = "DEPENDENT_ON_SEASON"
	FamiliesKidsClubExceptionEnumDependentOnDayOfWeek FamiliesKidsClubExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type Families struct {
	Babysitting             *bool                                `json:"babysitting"`
	BabysittingException    *FamiliesBabysittingExceptionEnum    `json:"babysittingException"`
	KidsActivities          *bool                                `json:"kidsActivities"`
	KidsActivitiesException *FamiliesKidsActivitiesExceptionEnum `json:"kidsActivitiesException"`
	KidsClub                *bool                                `json:"kidsClub"`
	KidsClubException       *FamiliesKidsClubExceptionEnum       `json:"kidsClubException"`
}
