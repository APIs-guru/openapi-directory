import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAutocompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;
}


export class GetAutocompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAutocompleteQueryParams;
}


export class GetAutocompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
