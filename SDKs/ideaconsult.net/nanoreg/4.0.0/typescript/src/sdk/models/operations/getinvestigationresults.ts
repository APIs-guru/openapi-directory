import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvestigationResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum GetInvestigationResultsTypeEnum {
    Byinvestigation = "byinvestigation",
    Byassay = "byassay",
    Bysubstance = "bysubstance",
    Byprovider = "byprovider",
    Bycitation = "bycitation",
    Bystudytype = "bystudytype",
    BystructureInchikey = "bystructure_inchikey",
    BystructureSmiles = "bystructure_smiles",
    BystructureName = "bystructure_name",
    BysubstanceName = "bysubstance_name",
    BysubstanceType = "bysubstance_type"
}


export class GetInvestigationResultsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inchikey" })
  inchikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetInvestigationResultsTypeEnum;
}


export class GetInvestigationResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvestigationResultsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInvestigationResultsQueryParams;
}


export class GetInvestigationResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  investigation?: shared.Investigation;

  @SpeakeasyMetadata()
  statusCode: number;
}
