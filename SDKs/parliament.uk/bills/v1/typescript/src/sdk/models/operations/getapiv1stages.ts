import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1StagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1StagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1StagesQueryParams;
}


export class GetApiV1StagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  stageReferenceSearchResult?: shared.StageReferenceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
