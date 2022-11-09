import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvestigationResultsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum GetInvestigationResultsTypeEnum {
    Byinvestigation = "byinvestigation"
,    Byassay = "byassay"
,    Bysubstance = "bysubstance"
,    Byprovider = "byprovider"
,    Bycitation = "bycitation"
,    Bystudytype = "bystudytype"
,    BystructureInchikey = "bystructure_inchikey"
,    BystructureSmiles = "bystructure_smiles"
,    BystructureName = "bystructure_name"
,    BysubstanceName = "bysubstance_name"
,    BysubstanceType = "bysubstance_type"
}


export class GetInvestigationResultsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inchikey" })
  inchikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetInvestigationResultsTypeEnum;
}


export class GetInvestigationResultsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvestigationResultsPathParams;

  @Metadata()
  queryParams: GetInvestigationResultsQueryParams;
}


export class GetInvestigationResultsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  investigation?: shared.Investigation;

  @Metadata()
  statusCode: number;
}
