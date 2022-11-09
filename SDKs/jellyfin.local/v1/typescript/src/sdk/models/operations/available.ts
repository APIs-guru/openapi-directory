import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AvailableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.QuickConnectStateEnum;
}


export class AvailableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AvailableRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AvailableQueryParams;

  @Metadata()
  security: AvailableSecurity;
}


export class AvailableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
