import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConnectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret: string;
}


export class ConnectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ConnectQueryParams;
}


export class ConnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  quickConnectResult?: shared.QuickConnectResult;

  @Metadata()
  statusCode: number;
}
