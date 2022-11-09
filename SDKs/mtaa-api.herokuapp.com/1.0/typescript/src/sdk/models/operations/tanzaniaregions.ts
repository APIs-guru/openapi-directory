import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TanzaniaRegionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class TanzaniaRegionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TanzaniaRegionsPathParams;
}


export class TanzaniaRegionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
