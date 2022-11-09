import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TenancyTenantGroupsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantGroupsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantGroupsReadPathParams;
}


export class TenancyTenantGroupsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tenantGroup?: shared.TenantGroup;
}
