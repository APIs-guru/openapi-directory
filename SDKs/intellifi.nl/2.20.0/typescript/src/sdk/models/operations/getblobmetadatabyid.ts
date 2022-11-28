import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlobMetadataByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBlobMetadataByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBlobMetadataByIdPathParams;
}


export class GetBlobMetadataByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blob?: shared.Blob;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
