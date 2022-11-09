import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1BusinessusersPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;
}


export class GetSetupV1BusinessusersPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1BusinessusersPermissionsQueryParams;
}


export class GetSetupV1BusinessusersPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  businessPermissionListViewModel?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
