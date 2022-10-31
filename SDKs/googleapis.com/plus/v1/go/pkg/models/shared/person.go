package shared



type PersonAgeRange struct {
    Max *int32 `json:"max,omitempty"`
    Min *int32 `json:"min,omitempty"`
    
}

type PersonCoverCoverInfo struct {
    LeftImageOffset *int32 `json:"leftImageOffset,omitempty"`
    TopImageOffset *int32 `json:"topImageOffset,omitempty"`
    
}

type PersonCoverCoverPhoto struct {
    Height *int32 `json:"height,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

type PersonCover struct {
    CoverInfo *PersonCoverCoverInfo `json:"coverInfo,omitempty"`
    CoverPhoto *PersonCoverCoverPhoto `json:"coverPhoto,omitempty"`
    Layout *string `json:"layout,omitempty"`
    
}

type PersonEmails struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type PersonImage struct {
    IsDefault *bool `json:"isDefault,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type PersonName struct {
    FamilyName *string `json:"familyName,omitempty"`
    Formatted *string `json:"formatted,omitempty"`
    GivenName *string `json:"givenName,omitempty"`
    HonorificPrefix *string `json:"honorificPrefix,omitempty"`
    HonorificSuffix *string `json:"honorificSuffix,omitempty"`
    MiddleName *string `json:"middleName,omitempty"`
    
}

type PersonOrganizations struct {
    Department *string `json:"department,omitempty"`
    Description *string `json:"description,omitempty"`
    EndDate *string `json:"endDate,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    Primary *bool `json:"primary,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type PersonPlacesLived struct {
    Primary *bool `json:"primary,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type PersonUrls struct {
    Label *string `json:"label,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type Person struct {
    AboutMe *string `json:"aboutMe,omitempty"`
    AgeRange *PersonAgeRange `json:"ageRange,omitempty"`
    Birthday *string `json:"birthday,omitempty"`
    BraggingRights *string `json:"braggingRights,omitempty"`
    CircledByCount *int32 `json:"circledByCount,omitempty"`
    Cover *PersonCover `json:"cover,omitempty"`
    CurrentLocation *string `json:"currentLocation,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Emails []PersonEmails `json:"emails,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Gender *string `json:"gender,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *PersonImage `json:"image,omitempty"`
    IsPlusUser *bool `json:"isPlusUser,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Language *string `json:"language,omitempty"`
    Name *PersonName `json:"name,omitempty"`
    Nickname *string `json:"nickname,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    Occupation *string `json:"occupation,omitempty"`
    Organizations []PersonOrganizations `json:"organizations,omitempty"`
    PlacesLived []PersonPlacesLived `json:"placesLived,omitempty"`
    PlusOneCount *int32 `json:"plusOneCount,omitempty"`
    RelationshipStatus *string `json:"relationshipStatus,omitempty"`
    Skills *string `json:"skills,omitempty"`
    Tagline *string `json:"tagline,omitempty"`
    URL *string `json:"url,omitempty"`
    Urls []PersonUrls `json:"urls,omitempty"`
    Verified *bool `json:"verified,omitempty"`
    
}

