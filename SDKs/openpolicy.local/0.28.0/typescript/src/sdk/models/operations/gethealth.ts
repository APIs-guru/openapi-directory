import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHealthQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bundles" })
  bundles?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=plugins" })
  plugins?: boolean;
}


export class GetHealthRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHealthQueryParams;
}


export class GetHealthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
