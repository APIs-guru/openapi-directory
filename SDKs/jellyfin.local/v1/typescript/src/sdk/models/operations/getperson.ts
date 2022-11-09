import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPersonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetPersonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPersonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPersonPathParams;

  @Metadata()
  queryParams: GetPersonQueryParams;

  @Metadata()
  security: GetPersonSecurity;
}


export class GetPersonResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDto?: shared.BaseItemDto;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
