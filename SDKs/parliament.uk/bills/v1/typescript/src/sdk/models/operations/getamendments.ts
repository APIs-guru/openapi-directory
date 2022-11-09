import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAmendmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=billStageId" })
  billStageId: number;
}


export class GetAmendmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Decision" })
  decision?: shared.DecisionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MemberId" })
  memberId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SearchTerm" })
  searchTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetAmendmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAmendmentsPathParams;

  @Metadata()
  queryParams: GetAmendmentsQueryParams;
}


export class GetAmendmentsResponse extends SpeakeasyBase {
  @Metadata()
  amendmentSearchItemSearchResult?: shared.AmendmentSearchItemSearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
