package operations

type SessionControllerCreateLandlordLoginPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type SessionControllerCreateLandlordLoginQueryParams struct {
	BranchID        *string `queryParam:"style=form,explode=true,name=branchID"`
	ContactDetails  string  `queryParam:"style=form,explode=true,name=contactDetails"`
	Email           string  `queryParam:"style=form,explode=true,name=email"`
	Forename        string  `queryParam:"style=form,explode=true,name=forename"`
	PropertyAddress string  `queryParam:"style=form,explode=true,name=propertyAddress"`
	Surname         string  `queryParam:"style=form,explode=true,name=surname"`
	Title           string  `queryParam:"style=form,explode=true,name=title"`
}

type SessionControllerCreateLandlordLoginRequest struct {
	PathParams  SessionControllerCreateLandlordLoginPathParams
	QueryParams SessionControllerCreateLandlordLoginQueryParams
}

type SessionControllerCreateLandlordLoginResponse struct {
	ContentType string
	StatusCode  int64
}
