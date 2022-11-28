import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubstanceCompositionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class GetSubstanceCompositionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetSubstanceCompositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubstanceCompositionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubstanceCompositionQueryParams;
}


export class GetSubstanceCompositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  substanceComposition?: shared.SubstanceComposition;
}
