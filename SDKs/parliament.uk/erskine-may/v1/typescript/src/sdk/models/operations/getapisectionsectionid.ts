import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiSectionSectionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sectionId" })
  sectionId: number;
}


export class GetApiSectionSectionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiSectionSectionIdPathParams;
}


export class GetApiSectionSectionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  erskineMaySectionDetail?: shared.ErskineMaySectionDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
