import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TenancyTenantsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TenancyTenantsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TenancyTenantsDeletePathParams;
}


export class TenancyTenantsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
