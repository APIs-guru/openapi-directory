import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAutocompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;
}


export class GetAutocompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAutocompleteQueryParams;
}


export class GetAutocompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
