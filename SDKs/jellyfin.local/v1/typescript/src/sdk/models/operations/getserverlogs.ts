import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetServerLogsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetServerLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetServerLogsSecurity;
}


export class GetServerLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LogFile })
  logFiles?: shared.LogFile[];

  @SpeakeasyMetadata()
  statusCode: number;
}
