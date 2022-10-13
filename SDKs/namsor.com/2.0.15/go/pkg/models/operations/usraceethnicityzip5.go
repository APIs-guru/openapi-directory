package operations

import (
	"openapi/pkg/models/shared"
)

type UsRaceEthnicityZip5PathParams struct {
	FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
	LastName  string `pathParam:"style=simple,explode=false,name=lastName"`
	Zip5Code  string `pathParam:"style=simple,explode=false,name=zip5Code"`
}

type UsRaceEthnicityZip5Security struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UsRaceEthnicityZip5Request struct {
	PathParams UsRaceEthnicityZip5PathParams
	Security   UsRaceEthnicityZip5Security
}

type UsRaceEthnicityZip5Response struct {
	ContentType                     string
	FirstLastNameUsRaceEthnicityOut *shared.FirstLastNameUsRaceEthnicityOut
	StatusCode                      int64
}
