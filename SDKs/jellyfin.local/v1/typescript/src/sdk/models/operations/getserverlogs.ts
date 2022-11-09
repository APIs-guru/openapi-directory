import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServerLogsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetServerLogsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetServerLogsSecurity;
}


export class GetServerLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LogFile })
  logFiles?: shared.LogFile[];

  @Metadata()
  statusCode: number;
}
