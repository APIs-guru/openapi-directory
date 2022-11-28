import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinodeTransferByYearMonthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetLinodeTransferByYearMonthSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLinodeTransferByYearMonthDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeTransferByYearMonthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLinodeTransferByYearMonthPathParams;

  @SpeakeasyMetadata()
  security: GetLinodeTransferByYearMonthSecurity;
}


export class GetLinodeTransferByYearMonthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLinodeTransferByYearMonth200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getLinodeTransferByYearMonthDefaultApplicationJsonObject?: GetLinodeTransferByYearMonthDefaultApplicationJson;
}
