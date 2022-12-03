import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutApplicationsApplicationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class PutApplicationsApplicationId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: shared.ApplicationReadV1;
}


export class PutApplicationsApplicationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutApplicationsApplicationIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ApplicationWriteV1;
}


export class PutApplicationsApplicationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putApplicationsApplicationId200ApplicationJsonObject?: PutApplicationsApplicationId200ApplicationJson;
}
