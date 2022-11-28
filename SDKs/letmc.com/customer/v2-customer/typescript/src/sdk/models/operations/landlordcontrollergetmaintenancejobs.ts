import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LandlordControllerGetMaintenanceJobsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetMaintenanceJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetMaintenanceJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetMaintenanceJobsPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetMaintenanceJobsQueryParams;
}


export class LandlordControllerGetMaintenanceJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordMaintenanceModel?: shared.LandlordMaintenanceModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
