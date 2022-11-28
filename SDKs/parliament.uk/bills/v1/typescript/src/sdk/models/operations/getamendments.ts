import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAmendmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billStageId" })
  billStageId: number;
}


export class GetAmendmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Decision" })
  decision?: shared.DecisionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MemberId" })
  memberId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SearchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetAmendmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAmendmentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAmendmentsQueryParams;
}


export class GetAmendmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amendmentSearchItemSearchResult?: shared.AmendmentSearchItemSearchResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
