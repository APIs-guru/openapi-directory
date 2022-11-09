import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TenancyTenantsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantsReadPathParams;
}


export class TenancyTenantsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tenant?: shared.Tenant;
}
