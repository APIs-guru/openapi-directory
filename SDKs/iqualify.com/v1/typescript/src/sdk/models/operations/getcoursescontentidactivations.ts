import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCoursesContentIdActivationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class GetCoursesContentIdActivationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCoursesContentIdActivationsPathParams;
}


export class GetCoursesContentIdActivationsResponse extends SpeakeasyBase {
  @Metadata()
  activationResponse?: shared.ActivationResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
