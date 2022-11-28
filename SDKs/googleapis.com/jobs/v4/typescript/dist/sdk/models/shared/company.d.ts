import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyDerivedInfo } from "./companyderivedinfo";
export declare enum CompanySizeEnum {
    CompanySizeUnspecified = "COMPANY_SIZE_UNSPECIFIED",
    Mini = "MINI",
    Small = "SMALL",
    Smedium = "SMEDIUM",
    Medium = "MEDIUM",
    Big = "BIG",
    Bigger = "BIGGER",
    Giant = "GIANT"
}
/**
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
export declare class Company extends SpeakeasyBase {
    careerSiteUri?: string;
    derivedInfo?: CompanyDerivedInfo;
    displayName?: string;
    eeoText?: string;
    externalId?: string;
    headquartersAddress?: string;
    hiringAgency?: boolean;
    imageUri?: string;
    keywordSearchableJobCustomAttributes?: string[];
    name?: string;
    size?: CompanySizeEnum;
    suspended?: boolean;
    websiteUri?: string;
}
/**
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
export declare class CompanyInput extends SpeakeasyBase {
    careerSiteUri?: string;
    derivedInfo?: CompanyDerivedInfo;
    displayName?: string;
    eeoText?: string;
    externalId?: string;
    headquartersAddress?: string;
    hiringAgency?: boolean;
    imageUri?: string;
    keywordSearchableJobCustomAttributes?: string[];
    name?: string;
    size?: CompanySizeEnum;
    websiteUri?: string;
}
