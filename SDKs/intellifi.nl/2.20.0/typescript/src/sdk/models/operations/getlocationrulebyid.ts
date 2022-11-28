import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocationRuleByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLocationRuleByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocationRuleByIdPathParams;
}


export class GetLocationRuleByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationRule?: shared.LocationRule;

  @SpeakeasyMetadata()
  statusCode: number;
}
