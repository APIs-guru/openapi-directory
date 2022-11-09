import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudChannelV1EduDataInstituteSizeEnum {
    InstituteSizeUnspecified = "INSTITUTE_SIZE_UNSPECIFIED"
,    Size1100 = "SIZE_1_100"
,    Size101500 = "SIZE_101_500"
,    Size5011000 = "SIZE_501_1000"
,    Size10012000 = "SIZE_1001_2000"
,    Size20015000 = "SIZE_2001_5000"
,    Size500110000 = "SIZE_5001_10000"
,    Size10001OrMore = "SIZE_10001_OR_MORE"
}

export enum GoogleCloudChannelV1EduDataInstituteTypeEnum {
    InstituteTypeUnspecified = "INSTITUTE_TYPE_UNSPECIFIED"
,    K12 = "K12"
,    University = "UNIVERSITY"
}


// GoogleCloudChannelV1EduData
/** 
 * Required Edu Attributes
**/
export class GoogleCloudChannelV1EduData extends SpeakeasyBase {
  @Metadata({ data: "json, name=instituteSize" })
  instituteSize?: GoogleCloudChannelV1EduDataInstituteSizeEnum;

  @Metadata({ data: "json, name=instituteType" })
  instituteType?: GoogleCloudChannelV1EduDataInstituteTypeEnum;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
