import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRackRolesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackRolesDeletePathParams;
}


export class DcimRackRolesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
