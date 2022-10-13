package operations

type PostModalitiesIDFindPatientPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostModalitiesIDFindPatientRequest struct {
	PathParams PostModalitiesIDFindPatientPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostModalitiesIDFindPatientResponse struct {
	ContentType                                      string
	PostModalitiesIDFindPatient200ApplicationJSONAny *interface{}
	StatusCode                                       int64
}
