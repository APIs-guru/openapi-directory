import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageAutocompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetActionPackageAutocompleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageAutocompleteQueryParams;
}


export class GetActionPackageAutocompleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
