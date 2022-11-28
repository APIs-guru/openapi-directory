import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoursesContentIdPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class GetCoursesContentIdPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCoursesContentIdPermissionsPathParams;
}


export class GetCoursesContentIdPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userPermission?: any;
}
