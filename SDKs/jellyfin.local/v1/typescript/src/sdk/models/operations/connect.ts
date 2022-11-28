import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConnectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret: string;
}


export class ConnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ConnectQueryParams;
}


export class ConnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  quickConnectResult?: shared.QuickConnectResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
