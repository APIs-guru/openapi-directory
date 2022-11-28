import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TenancyTenantGroupsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantGroupsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TenancyTenantGroupsDeletePathParams;
}


export class TenancyTenantGroupsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
