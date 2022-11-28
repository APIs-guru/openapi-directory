package shared

type PetsCatsAllowedExceptionEnum string

const (
	PetsCatsAllowedExceptionEnumExceptionUnspecified PetsCatsAllowedExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PetsCatsAllowedExceptionEnumUnderConstruction    PetsCatsAllowedExceptionEnum = "UNDER_CONSTRUCTION"
	PetsCatsAllowedExceptionEnumDependentOnSeason    PetsCatsAllowedExceptionEnum = "DEPENDENT_ON_SEASON"
	PetsCatsAllowedExceptionEnumDependentOnDayOfWeek PetsCatsAllowedExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PetsDogsAllowedExceptionEnum string

const (
	PetsDogsAllowedExceptionEnumExceptionUnspecified PetsDogsAllowedExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PetsDogsAllowedExceptionEnumUnderConstruction    PetsDogsAllowedExceptionEnum = "UNDER_CONSTRUCTION"
	PetsDogsAllowedExceptionEnumDependentOnSeason    PetsDogsAllowedExceptionEnum = "DEPENDENT_ON_SEASON"
	PetsDogsAllowedExceptionEnumDependentOnDayOfWeek PetsDogsAllowedExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PetsPetsAllowedExceptionEnum string

const (
	PetsPetsAllowedExceptionEnumExceptionUnspecified PetsPetsAllowedExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PetsPetsAllowedExceptionEnumUnderConstruction    PetsPetsAllowedExceptionEnum = "UNDER_CONSTRUCTION"
	PetsPetsAllowedExceptionEnumDependentOnSeason    PetsPetsAllowedExceptionEnum = "DEPENDENT_ON_SEASON"
	PetsPetsAllowedExceptionEnumDependentOnDayOfWeek PetsPetsAllowedExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PetsPetsAllowedFreeExceptionEnum string

const (
	PetsPetsAllowedFreeExceptionEnumExceptionUnspecified PetsPetsAllowedFreeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PetsPetsAllowedFreeExceptionEnumUnderConstruction    PetsPetsAllowedFreeExceptionEnum = "UNDER_CONSTRUCTION"
	PetsPetsAllowedFreeExceptionEnumDependentOnSeason    PetsPetsAllowedFreeExceptionEnum = "DEPENDENT_ON_SEASON"
	PetsPetsAllowedFreeExceptionEnumDependentOnDayOfWeek PetsPetsAllowedFreeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// Pets
// Policies regarding guest-owned animals.
type Pets struct {
	CatsAllowed              *bool                             `json:"catsAllowed,omitempty"`
	CatsAllowedException     *PetsCatsAllowedExceptionEnum     `json:"catsAllowedException,omitempty"`
	DogsAllowed              *bool                             `json:"dogsAllowed,omitempty"`
	DogsAllowedException     *PetsDogsAllowedExceptionEnum     `json:"dogsAllowedException,omitempty"`
	PetsAllowed              *bool                             `json:"petsAllowed,omitempty"`
	PetsAllowedException     *PetsPetsAllowedExceptionEnum     `json:"petsAllowedException,omitempty"`
	PetsAllowedFree          *bool                             `json:"petsAllowedFree,omitempty"`
	PetsAllowedFreeException *PetsPetsAllowedFreeExceptionEnum `json:"petsAllowedFreeException,omitempty"`
}
