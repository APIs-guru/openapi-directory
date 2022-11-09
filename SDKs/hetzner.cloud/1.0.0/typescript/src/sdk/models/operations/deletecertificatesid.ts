import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCertificatesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCertificatesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCertificatesIdPathParams;
}


export class DeleteCertificatesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
