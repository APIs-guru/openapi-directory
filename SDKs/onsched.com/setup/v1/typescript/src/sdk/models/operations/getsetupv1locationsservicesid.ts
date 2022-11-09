import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1LocationsServicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsServicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1LocationsServicesIdPathParams;
}


export class GetSetupV1LocationsServicesIdResponse extends SpeakeasyBase {
  @Metadata()
  businessServiceViewModel?: shared.BusinessServiceViewModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
