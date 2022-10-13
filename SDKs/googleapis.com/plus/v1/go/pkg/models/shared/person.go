package shared

type PersonAgeRange struct {
	Max *int32 `json:"max"`
	Min *int32 `json:"min"`
}

type PersonCoverCoverInfo struct {
	LeftImageOffset *int32 `json:"leftImageOffset"`
	TopImageOffset  *int32 `json:"topImageOffset"`
}

type PersonCoverCoverPhoto struct {
	Height *int32  `json:"height"`
	URL    *string `json:"url"`
	Width  *int32  `json:"width"`
}

type PersonCover struct {
	CoverInfo  *PersonCoverCoverInfo  `json:"coverInfo"`
	CoverPhoto *PersonCoverCoverPhoto `json:"coverPhoto"`
	Layout     *string                `json:"layout"`
}

type PersonEmails struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type PersonImage struct {
	IsDefault *bool   `json:"isDefault"`
	URL       *string `json:"url"`
}

type PersonName struct {
	FamilyName      *string `json:"familyName"`
	Formatted       *string `json:"formatted"`
	GivenName       *string `json:"givenName"`
	HonorificPrefix *string `json:"honorificPrefix"`
	HonorificSuffix *string `json:"honorificSuffix"`
	MiddleName      *string `json:"middleName"`
}

type PersonOrganizations struct {
	Department  *string `json:"department"`
	Description *string `json:"description"`
	EndDate     *string `json:"endDate"`
	Location    *string `json:"location"`
	Name        *string `json:"name"`
	Primary     *bool   `json:"primary"`
	StartDate   *string `json:"startDate"`
	Title       *string `json:"title"`
	Type        *string `json:"type"`
}

type PersonPlacesLived struct {
	Primary *bool   `json:"primary"`
	Value   *string `json:"value"`
}

type PersonUrls struct {
	Label *string `json:"label"`
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type Person struct {
	AboutMe            *string               `json:"aboutMe"`
	AgeRange           *PersonAgeRange       `json:"ageRange"`
	Birthday           *string               `json:"birthday"`
	BraggingRights     *string               `json:"braggingRights"`
	CircledByCount     *int32                `json:"circledByCount"`
	Cover              *PersonCover          `json:"cover"`
	CurrentLocation    *string               `json:"currentLocation"`
	DisplayName        *string               `json:"displayName"`
	Domain             *string               `json:"domain"`
	Emails             []PersonEmails        `json:"emails"`
	Etag               *string               `json:"etag"`
	Gender             *string               `json:"gender"`
	ID                 *string               `json:"id"`
	Image              *PersonImage          `json:"image"`
	IsPlusUser         *bool                 `json:"isPlusUser"`
	Kind               *string               `json:"kind"`
	Language           *string               `json:"language"`
	Name               *PersonName           `json:"name"`
	Nickname           *string               `json:"nickname"`
	ObjectType         *string               `json:"objectType"`
	Occupation         *string               `json:"occupation"`
	Organizations      []PersonOrganizations `json:"organizations"`
	PlacesLived        []PersonPlacesLived   `json:"placesLived"`
	PlusOneCount       *int32                `json:"plusOneCount"`
	RelationshipStatus *string               `json:"relationshipStatus"`
	Skills             *string               `json:"skills"`
	Tagline            *string               `json:"tagline"`
	URL                *string               `json:"url"`
	Urls               []PersonUrls          `json:"urls"`
	Verified           *bool                 `json:"verified"`
}
