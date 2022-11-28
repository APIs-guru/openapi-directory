import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum GetSubstancesTypeEnum {
    Substancetype = "substancetype",
    Name = "name",
    Like = "like",
    Regexp = "regexp",
    Uuif = "uuif",
    CompTox = "CompTox",
    Doi = "DOI",
    Reliability = "reliability",
    PurposeFlag = "purposeFlag",
    StudyResultType = "studyResultType",
    IsRobustStudy = "isRobustStudy",
    Citation = "citation",
    Citationowner = "citationowner",
    Topcategory = "topcategory",
    Endpointcategory = "endpointcategory",
    Params = "params",
    OwnerName = "owner_name",
    OwnerUuid = "owner_uuid",
    Related = "related",
    Reference = "reference",
    Facet = "facet"
}


export class GetSubstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addDummySubstance" })
  addDummySubstance?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" })
  bundleUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compound_uri" })
  compoundUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=studysummary" })
  studysummary?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetSubstancesTypeEnum;
}


export class GetSubstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubstancesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubstancesQueryParams;
}


export class GetSubstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  substance?: shared.Substance;
}
