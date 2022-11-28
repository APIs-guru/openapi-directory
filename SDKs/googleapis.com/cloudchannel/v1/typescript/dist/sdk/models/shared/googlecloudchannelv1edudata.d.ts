import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudChannelV1EduDataInstituteSizeEnum {
    InstituteSizeUnspecified = "INSTITUTE_SIZE_UNSPECIFIED",
    Size1100 = "SIZE_1_100",
    Size101500 = "SIZE_101_500",
    Size5011000 = "SIZE_501_1000",
    Size10012000 = "SIZE_1001_2000",
    Size20015000 = "SIZE_2001_5000",
    Size500110000 = "SIZE_5001_10000",
    Size10001OrMore = "SIZE_10001_OR_MORE"
}
export declare enum GoogleCloudChannelV1EduDataInstituteTypeEnum {
    InstituteTypeUnspecified = "INSTITUTE_TYPE_UNSPECIFIED",
    K12 = "K12",
    University = "UNIVERSITY"
}
/**
 * Required Edu Attributes
**/
export declare class GoogleCloudChannelV1EduData extends SpeakeasyBase {
    instituteSize?: GoogleCloudChannelV1EduDataInstituteSizeEnum;
    instituteType?: GoogleCloudChannelV1EduDataInstituteTypeEnum;
    website?: string;
}
