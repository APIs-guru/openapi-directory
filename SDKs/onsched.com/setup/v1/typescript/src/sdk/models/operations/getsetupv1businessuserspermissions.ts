import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1BusinessusersPermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;
}


export class GetSetupV1BusinessusersPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetupV1BusinessusersPermissionsQueryParams;
}


export class GetSetupV1BusinessusersPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  businessPermissionListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
