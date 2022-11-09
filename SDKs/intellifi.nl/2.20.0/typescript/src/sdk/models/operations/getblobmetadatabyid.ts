import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBlobMetadataByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBlobMetadataByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBlobMetadataByIdPathParams;
}


export class GetBlobMetadataByIdResponse extends SpeakeasyBase {
  @Metadata()
  blob?: shared.Blob;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
