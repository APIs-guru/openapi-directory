import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTunerHostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class DeleteTunerHostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeleteTunerHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteTunerHostQueryParams;

  @SpeakeasyMetadata()
  security: DeleteTunerHostSecurity;
}


export class DeleteTunerHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
