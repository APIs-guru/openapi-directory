import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimInterfacesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfacesDeletePathParams;
}


export class DcimInterfacesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
