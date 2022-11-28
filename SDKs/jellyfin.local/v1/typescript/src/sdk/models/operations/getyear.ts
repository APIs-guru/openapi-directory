import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetYearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetYearQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetYearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetYearPathParams;

  @SpeakeasyMetadata()
  queryParams: GetYearQueryParams;

  @SpeakeasyMetadata()
  security: GetYearSecurity;
}


export class GetYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDto?: shared.BaseItemDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
