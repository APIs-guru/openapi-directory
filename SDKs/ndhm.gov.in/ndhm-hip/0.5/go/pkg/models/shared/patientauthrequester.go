package shared

type PatientAuthRequesterTypeEnum string

const (
	PatientAuthRequesterTypeEnumHip PatientAuthRequesterTypeEnum = "HIP"
	PatientAuthRequesterTypeEnumHiu PatientAuthRequesterTypeEnum = "HIU"
)

type PatientAuthRequester struct {
	ID   string                       `json:"id"`
	Type PatientAuthRequesterTypeEnum `json:"type"`
}
