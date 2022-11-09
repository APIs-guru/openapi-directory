import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRackGroupsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackGroupsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackGroupsDeletePathParams;
}


export class DcimRackGroupsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
