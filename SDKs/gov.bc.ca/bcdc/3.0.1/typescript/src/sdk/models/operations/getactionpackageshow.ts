import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageShowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionPackageShowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageShowQueryParams;
}


export class GetActionPackageShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
