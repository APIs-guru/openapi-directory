import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanyDerivedInfo } from "./companyderivedinfo";


export enum CompanySizeEnum {
    CompanySizeUnspecified = "COMPANY_SIZE_UNSPECIFIED",
    Mini = "MINI",
    Small = "SMALL",
    Smedium = "SMEDIUM",
    Medium = "MEDIUM",
    Big = "BIG",
    Bigger = "BIGGER",
    Giant = "GIANT"
}


// Company
/** 
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
export class Company extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careerSiteUri" })
  careerSiteUri?: string;

  @SpeakeasyMetadata({ data: "json, name=derivedInfo" })
  derivedInfo?: CompanyDerivedInfo;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eeoText" })
  eeoText?: string;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=headquartersAddress" })
  headquartersAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=hiringAgency" })
  hiringAgency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=keywordSearchableJobCustomAttributes" })
  keywordSearchableJobCustomAttributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: CompanySizeEnum;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}
