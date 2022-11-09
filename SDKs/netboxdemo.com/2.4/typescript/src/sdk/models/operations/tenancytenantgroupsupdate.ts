import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TenancyTenantGroupsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantGroupsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantGroupsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TenantGroup;
}


export class TenancyTenantGroupsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tenantGroup?: shared.TenantGroup;
}
