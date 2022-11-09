import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum GetSubstancesTypeEnum {
    Substancetype = "substancetype"
,    Name = "name"
,    Like = "like"
,    Regexp = "regexp"
,    Uuif = "uuif"
,    CompTox = "CompTox"
,    Doi = "DOI"
,    Reliability = "reliability"
,    PurposeFlag = "purposeFlag"
,    StudyResultType = "studyResultType"
,    IsRobustStudy = "isRobustStudy"
,    Citation = "citation"
,    Citationowner = "citationowner"
,    Topcategory = "topcategory"
,    Endpointcategory = "endpointcategory"
,    Params = "params"
,    OwnerName = "owner_name"
,    OwnerUuid = "owner_uuid"
,    Related = "related"
,    Reference = "reference"
,    Facet = "facet"
}


export class GetSubstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addDummySubstance" })
  addDummySubstance?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" })
  bundleUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=compound_uri" })
  compoundUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=studysummary" })
  studysummary?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetSubstancesTypeEnum;
}


export class GetSubstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubstancesPathParams;

  @Metadata()
  queryParams: GetSubstancesQueryParams;
}


export class GetSubstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  substance?: shared.Substance;
}
