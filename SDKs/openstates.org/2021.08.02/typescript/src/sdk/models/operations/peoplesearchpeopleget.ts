import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PeopleSearchPeopleGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.PersonIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org_classification" })
  orgClassification?: shared.OrgClassificationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class PeopleSearchPeopleGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class PeopleSearchPeopleGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PeopleSearchPeopleGetQueryParams;

  @SpeakeasyMetadata()
  headers: PeopleSearchPeopleGetHeaders;
}


export class PeopleSearchPeopleGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  personList?: shared.PersonList;

  @SpeakeasyMetadata()
  statusCode: number;
}
