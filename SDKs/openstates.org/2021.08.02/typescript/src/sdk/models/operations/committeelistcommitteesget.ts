import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CommitteeListCommitteesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chamber" })
  chamber?: shared.OrgClassificationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification" })
  classification?: shared.CommitteeClassificationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.CommitteeIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class CommitteeListCommitteesGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class CommitteeListCommitteesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CommitteeListCommitteesGetQueryParams;

  @SpeakeasyMetadata()
  headers: CommitteeListCommitteesGetHeaders;
}


export class CommitteeListCommitteesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeList?: shared.CommitteeList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
