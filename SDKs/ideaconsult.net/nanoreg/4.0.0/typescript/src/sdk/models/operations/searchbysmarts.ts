import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchBySmartsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum SearchBySmartsTypeEnum {
    Smiles = "smiles"
,    Mol = "mol"
,    Url = "url"
}


export class SearchBySmartsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=b64search" })
  b64search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" })
  bundleUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dataset_uri" })
  datasetUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterBySubstance" })
  filterBySubstance?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mol" })
  mol?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sameas" })
  sameas?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: SearchBySmartsTypeEnum;
}


export class SearchBySmartsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchBySmartsPathParams;

  @Metadata()
  queryParams: SearchBySmartsQueryParams;
}


export class SearchBySmartsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
