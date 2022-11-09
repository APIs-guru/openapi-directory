import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1LocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1LocationsIdPathParams;
}


export class DeleteSetupV1LocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
