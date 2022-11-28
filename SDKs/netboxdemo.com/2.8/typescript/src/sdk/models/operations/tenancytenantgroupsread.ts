import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TenancyTenantGroupsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantGroupsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TenancyTenantGroupsReadPathParams;
}


export class TenancyTenantGroupsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tenantGroup?: shared.TenantGroup;
}
