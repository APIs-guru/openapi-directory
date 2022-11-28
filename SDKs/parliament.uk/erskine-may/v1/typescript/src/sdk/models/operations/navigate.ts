import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NavigatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sectionId" })
  sectionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=step" })
  step: number;
}


export class NavigateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NavigatePathParams;
}


export class NavigateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySectionOverview?: shared.ErskineMaySectionOverview;

  @SpeakeasyMetadata()
  statusCode: number;
}
