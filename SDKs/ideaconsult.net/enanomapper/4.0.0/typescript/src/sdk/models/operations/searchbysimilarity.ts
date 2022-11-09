import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchBySimilarityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum SearchBySimilarityTypeEnum {
    Smiles = "smiles"
,    Mol = "mol"
,    Url = "url"
}


export class SearchBySimilarityQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: SearchBySimilarityTypeEnum;
}


export class SearchBySimilarityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchBySimilarityPathParams;

  @Metadata()
  queryParams: SearchBySimilarityQueryParams;
}


export class SearchBySimilarityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
