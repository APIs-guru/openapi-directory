import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLocationPathParams;
}


export class DeleteLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
