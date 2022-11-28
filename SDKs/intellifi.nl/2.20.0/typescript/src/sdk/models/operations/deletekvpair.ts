import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteKvPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteKvPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteKvPairPathParams;
}


export class DeleteKvPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
