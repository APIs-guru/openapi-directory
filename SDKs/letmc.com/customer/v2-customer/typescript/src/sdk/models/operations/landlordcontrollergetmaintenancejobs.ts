import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LandlordControllerGetMaintenanceJobsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetMaintenanceJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetMaintenanceJobsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetMaintenanceJobsPathParams;

  @Metadata()
  queryParams: LandlordControllerGetMaintenanceJobsQueryParams;
}


export class LandlordControllerGetMaintenanceJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  landlordMaintenanceModel?: shared.LandlordMaintenanceModel;

  @Metadata()
  statusCode: number;
}
