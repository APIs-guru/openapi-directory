import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TenancyTenantsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TenancyTenantsReadPathParams;
}


export class TenancyTenantsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tenant?: shared.Tenant;
}
