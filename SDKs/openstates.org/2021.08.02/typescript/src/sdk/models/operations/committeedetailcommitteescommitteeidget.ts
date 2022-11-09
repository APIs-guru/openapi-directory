import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CommitteeDetailCommitteesCommitteeIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}


export class CommitteeDetailCommitteesCommitteeIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.CommitteeIncludeEnum[];
}


export class CommitteeDetailCommitteesCommitteeIdGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class CommitteeDetailCommitteesCommitteeIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommitteeDetailCommitteesCommitteeIdGetPathParams;

  @Metadata()
  queryParams: CommitteeDetailCommitteesCommitteeIdGetQueryParams;

  @Metadata()
  headers: CommitteeDetailCommitteesCommitteeIdGetHeaders;
}


export class CommitteeDetailCommitteesCommitteeIdGetResponse extends SpeakeasyBase {
  @Metadata()
  committee?: shared.Committee;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
