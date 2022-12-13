import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelGroupApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class CancelGroupApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelGroupApplicationPathParams;
}


export class CancelGroupApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupApplicationResult?: shared.GroupApplicationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
