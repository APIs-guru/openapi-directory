import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TenancyTenantGroupsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantGroupsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantGroupsDeletePathParams;
}


export class TenancyTenantGroupsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
