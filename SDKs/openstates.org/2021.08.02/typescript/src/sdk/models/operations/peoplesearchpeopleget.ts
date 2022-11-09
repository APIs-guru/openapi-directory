import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PeopleSearchPeopleGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.PersonIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org_classification" })
  orgClassification?: shared.OrgClassificationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class PeopleSearchPeopleGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class PeopleSearchPeopleGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PeopleSearchPeopleGetQueryParams;

  @Metadata()
  headers: PeopleSearchPeopleGetHeaders;
}


export class PeopleSearchPeopleGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  personList?: shared.PersonList;

  @Metadata()
  statusCode: number;
}
