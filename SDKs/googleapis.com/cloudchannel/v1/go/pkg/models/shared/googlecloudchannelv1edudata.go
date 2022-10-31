package shared

type GoogleCloudChannelV1EduDataInstituteSizeEnum string

const (
	GoogleCloudChannelV1EduDataInstituteSizeEnumInstituteSizeUnspecified GoogleCloudChannelV1EduDataInstituteSizeEnum = "INSTITUTE_SIZE_UNSPECIFIED"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize1100                 GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_1_100"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize101500               GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_101_500"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize5011000              GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_501_1000"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize10012000             GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_1001_2000"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize20015000             GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_2001_5000"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize500110000            GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_5001_10000"
	GoogleCloudChannelV1EduDataInstituteSizeEnumSize10001OrMore          GoogleCloudChannelV1EduDataInstituteSizeEnum = "SIZE_10001_OR_MORE"
)

type GoogleCloudChannelV1EduDataInstituteTypeEnum string

const (
	GoogleCloudChannelV1EduDataInstituteTypeEnumInstituteTypeUnspecified GoogleCloudChannelV1EduDataInstituteTypeEnum = "INSTITUTE_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1EduDataInstituteTypeEnumK12                      GoogleCloudChannelV1EduDataInstituteTypeEnum = "K12"
	GoogleCloudChannelV1EduDataInstituteTypeEnumUniversity               GoogleCloudChannelV1EduDataInstituteTypeEnum = "UNIVERSITY"
)

type GoogleCloudChannelV1EduData struct {
	InstituteSize *GoogleCloudChannelV1EduDataInstituteSizeEnum `json:"instituteSize,omitempty"`
	InstituteType *GoogleCloudChannelV1EduDataInstituteTypeEnum `json:"instituteType,omitempty"`
	Website       *string                                       `json:"website,omitempty"`
}
