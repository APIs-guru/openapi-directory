import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimSitesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimSitesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimSitesDeletePathParams;
}


export class DcimSitesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
