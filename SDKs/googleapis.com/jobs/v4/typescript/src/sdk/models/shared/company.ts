import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompanyDerivedInfo } from "./companyderivedinfo";

export enum CompanySizeEnum {
    CompanySizeUnspecified = "COMPANY_SIZE_UNSPECIFIED"
,    Mini = "MINI"
,    Small = "SMALL"
,    Smedium = "SMEDIUM"
,    Medium = "MEDIUM"
,    Big = "BIG"
,    Bigger = "BIGGER"
,    Giant = "GIANT"
}


// Company
/** 
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
export class Company extends SpeakeasyBase {
  @Metadata({ data: "json, name=careerSiteUri" })
  careerSiteUri?: string;

  @Metadata({ data: "json, name=derivedInfo" })
  derivedInfo?: CompanyDerivedInfo;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=eeoText" })
  eeoText?: string;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=headquartersAddress" })
  headquartersAddress?: string;

  @Metadata({ data: "json, name=hiringAgency" })
  hiringAgency?: boolean;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=keywordSearchableJobCustomAttributes" })
  keywordSearchableJobCustomAttributes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=size" })
  size?: CompanySizeEnum;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}
