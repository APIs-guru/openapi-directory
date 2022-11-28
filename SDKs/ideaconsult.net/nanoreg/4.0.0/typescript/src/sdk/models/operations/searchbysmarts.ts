import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchBySmartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;
}

export enum SearchBySmartsTypeEnum {
    Smiles = "smiles",
    Mol = "mol",
    Url = "url"
}


export class SearchBySmartsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=b64search" })
  b64search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" })
  bundleUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset_uri" })
  datasetUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterBySubstance" })
  filterBySubstance?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mol" })
  mol?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sameas" })
  sameas?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: SearchBySmartsTypeEnum;
}


export class SearchBySmartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchBySmartsPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchBySmartsQueryParams;
}


export class SearchBySmartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
