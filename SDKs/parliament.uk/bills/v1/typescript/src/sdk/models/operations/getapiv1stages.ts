import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1StagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1StagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1StagesQueryParams;
}


export class GetApiV1StagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  stageReferenceSearchResult?: shared.StageReferenceSearchResult;

  @Metadata()
  statusCode: number;
}
