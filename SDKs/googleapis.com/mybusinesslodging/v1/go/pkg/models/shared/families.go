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

type FamiliesKidsFriendlyExceptionEnum string

const (
	FamiliesKidsFriendlyExceptionEnumExceptionUnspecified FamiliesKidsFriendlyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	FamiliesKidsFriendlyExceptionEnumUnderConstruction    FamiliesKidsFriendlyExceptionEnum = "UNDER_CONSTRUCTION"
	FamiliesKidsFriendlyExceptionEnumDependentOnSeason    FamiliesKidsFriendlyExceptionEnum = "DEPENDENT_ON_SEASON"
	FamiliesKidsFriendlyExceptionEnumDependentOnDayOfWeek FamiliesKidsFriendlyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// Families
// Services and amenities for families and young guests.
type Families struct {
	Babysitting             *bool                                `json:"babysitting,omitempty"`
	BabysittingException    *FamiliesBabysittingExceptionEnum    `json:"babysittingException,omitempty"`
	KidsActivities          *bool                                `json:"kidsActivities,omitempty"`
	KidsActivitiesException *FamiliesKidsActivitiesExceptionEnum `json:"kidsActivitiesException,omitempty"`
	KidsClub                *bool                                `json:"kidsClub,omitempty"`
	KidsClubException       *FamiliesKidsClubExceptionEnum       `json:"kidsClubException,omitempty"`
	KidsFriendly            *bool                                `json:"kidsFriendly,omitempty"`
	KidsFriendlyException   *FamiliesKidsFriendlyExceptionEnum   `json:"kidsFriendlyException,omitempty"`
}
