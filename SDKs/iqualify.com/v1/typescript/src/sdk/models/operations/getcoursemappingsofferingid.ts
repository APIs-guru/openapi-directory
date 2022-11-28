import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCourseMappingsOfferingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetCourseMappingsOfferingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCourseMappingsOfferingIdPathParams;
}


export class GetCourseMappingsOfferingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  getCourseMappingsOfferingId200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
