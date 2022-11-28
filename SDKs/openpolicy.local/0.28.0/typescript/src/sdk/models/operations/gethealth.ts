import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHealthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundles" })
  bundles?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plugins" })
  plugins?: boolean;
}


export class GetHealthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHealthQueryParams;
}


export class GetHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
