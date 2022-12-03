import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApplicationsApplicationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetApplicationsApplicationId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: shared.ApplicationReadV1;
}


export class GetApplicationsApplicationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApplicationsApplicationIdPathParams;
}


export class GetApplicationsApplicationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getApplicationsApplicationId200ApplicationJsonObject?: GetApplicationsApplicationId200ApplicationJson;
}
