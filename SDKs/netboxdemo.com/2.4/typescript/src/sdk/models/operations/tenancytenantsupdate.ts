import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TenancyTenantsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableTenant;
}


export class TenancyTenantsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tenant?: shared.Tenant;
}
