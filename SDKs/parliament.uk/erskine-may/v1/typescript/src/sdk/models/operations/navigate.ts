import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NavigatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sectionId" })
  sectionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=step" })
  step: number;
}


export class NavigateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NavigatePathParams;
}


export class NavigateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  erskineMaySectionOverview?: shared.ErskineMaySectionOverview;

  @Metadata()
  statusCode: number;
}
