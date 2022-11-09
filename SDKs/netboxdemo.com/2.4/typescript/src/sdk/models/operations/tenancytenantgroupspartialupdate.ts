import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TenancyTenantGroupsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantGroupsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantGroupsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TenantGroup;
}


export class TenancyTenantGroupsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tenantGroup?: shared.TenantGroup;
}
