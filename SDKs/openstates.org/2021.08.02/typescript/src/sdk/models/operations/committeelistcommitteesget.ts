import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CommitteeListCommitteesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=chamber" })
  chamber?: shared.OrgClassificationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=classification" })
  classification?: shared.CommitteeClassificationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.CommitteeIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class CommitteeListCommitteesGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class CommitteeListCommitteesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CommitteeListCommitteesGetQueryParams;

  @Metadata()
  headers: CommitteeListCommitteesGetHeaders;
}


export class CommitteeListCommitteesGetResponse extends SpeakeasyBase {
  @Metadata()
  committeeList?: shared.CommitteeList;

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
