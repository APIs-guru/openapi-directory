import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CommitteeDetailCommitteesCommitteeIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}


export class CommitteeDetailCommitteesCommitteeIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.CommitteeIncludeEnum[];
}


export class CommitteeDetailCommitteesCommitteeIdGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class CommitteeDetailCommitteesCommitteeIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommitteeDetailCommitteesCommitteeIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CommitteeDetailCommitteesCommitteeIdGetQueryParams;

  @SpeakeasyMetadata()
  headers: CommitteeDetailCommitteesCommitteeIdGetHeaders;
}


export class CommitteeDetailCommitteesCommitteeIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committee?: shared.Committee;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
