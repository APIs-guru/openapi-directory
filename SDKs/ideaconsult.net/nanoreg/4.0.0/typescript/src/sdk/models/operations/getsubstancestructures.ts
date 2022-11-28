import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubstanceStructuresPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetSubstanceStructuresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetSubstanceStructuresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubstanceStructuresPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubstanceStructuresQueryParams;
}


export class GetSubstanceStructuresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
