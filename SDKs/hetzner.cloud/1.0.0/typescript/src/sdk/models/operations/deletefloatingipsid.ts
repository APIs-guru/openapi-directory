import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFloatingIpsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFloatingIpsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFloatingIpsIdPathParams;
}


export class DeleteFloatingIpsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
