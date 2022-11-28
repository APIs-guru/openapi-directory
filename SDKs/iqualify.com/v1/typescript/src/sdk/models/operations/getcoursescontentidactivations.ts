import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoursesContentIdActivationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class GetCoursesContentIdActivationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCoursesContentIdActivationsPathParams;
}


export class GetCoursesContentIdActivationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activationResponse?: shared.ActivationResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
