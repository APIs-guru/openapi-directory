import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TenancyTenantsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TenancyTenantsDeletePathParams;
}


export class TenancyTenantsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
